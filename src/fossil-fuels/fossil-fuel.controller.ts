import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { FossilFuelService } from './fossil-fuel.service';

@Controller()
export class FossilFuelController {
  constructor(private readonly fossilFuelService: FossilFuelService) {}

  @Get('/horizontal-bar/data')
  public async horizontalBarData(
    @Res() res: Response,
    @Query() query,
  ): Promise<any> {
    if (!query.year) {
      return res.status(400).send({
        statusCode: 400,
        error: 'Bad Request',
        message: 'Year is required',
      });
    }

    const yearWiseData =
      await this.fossilFuelService.getHorizontalBarDataByYear(query.year);

    return res.send({
      statusCode: 200,
      message: 'success',
      data: yearWiseData,
    });
  }

  @Get('/horizontal-bar/distinct-years')
  public async distinctYears(): Promise<any> {
    const years = await this.fossilFuelService.getDistinctYears();
    return {
      statusCode: 200,
      status: 'success',
      data: years,
    };
  }
}
