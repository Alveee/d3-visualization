import { Controller, Get, Res } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

export interface IEntity {
  state: string;
  date: string;
  renewables: number;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/data')
  public async readCsvAndReturnData(): Promise<Observable<IEntity[]>> {
    return await this.appService.readCsvAndReturnData();
  }
}
