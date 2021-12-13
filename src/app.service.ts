import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as csv from 'csv-parser';
import * as getStream from 'get-stream';
import { IEntity } from './interfaces/IEntity';
import { IGraphData } from './interfaces/IGraphData';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  public async readCsvAndReturnData(): Promise<IGraphData[]> {
    const filePath = __dirname + '/../storage/interactive_data.csv';
    const parseStream = csv({});
    const data = await getStream.array(
      fs.createReadStream(filePath).pipe(parseStream),
    );
    const entities = data.map((x: IEntity) => {
      return {
        state: x.state,
        year: new Date(x.date).getFullYear().toString(),
        renewables: x.renewables,
      };
    });

    return this.getFormattedData(entities);
  }

  private getFormattedData(entities): IGraphData[] {
    const formattedResult: IGraphData[] = [];
    entities.reduce((res: IGraphData, value) => {
      if (!res[value.year]) {
        res[value.year] = {
          renewables: 0,
          year: value.year,
        };
        formattedResult.push(res[value.year]);
      }
      res[value.year].renewables += parseFloat(value.renewables);
      return res;
    }, {});
    return formattedResult;
  }
}
