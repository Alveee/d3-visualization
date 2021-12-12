import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as csv from 'csv-parser';
import * as getStream from 'get-stream';
import { Observable, of } from 'rxjs';

export type IEntity = {
  state: string;
  date: string;
  renewables: number;
};

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  public async readCsvAndReturnData(): Promise<IEntity[]> {
    const filePath = __dirname + '/../storage/interactive_data.csv';
    const parseStream = csv({});
    const data = await getStream.array(
      fs.createReadStream(filePath).pipe(parseStream),
    );
    const entities = data.map((x: IEntity) => {
      return {
        state: x.state,
        date: x.date,
        renewables: x.renewables,
      };
    });
    return entities;
  }
}
