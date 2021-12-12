import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
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
  public async readCsvAndReturnData(@Res() res: Response): Promise<any> {
    const entities = await this.appService.readCsvAndReturnData();
    return res.status(HttpStatus.OK).json({
      status: 'success',
      data: entities,
    });
  }
}
