import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/data')
  public async readCsvAndReturnData(@Res() res: Response): Promise<Response> {
    const graphData = await this.appService.readCsvAndReturnData();
    return res.status(HttpStatus.OK).json({
      status: 'success',
      data: graphData,
    });
  }
}
