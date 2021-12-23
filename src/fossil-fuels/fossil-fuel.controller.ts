import { Controller, Get, Req } from '@nestjs/common';
import { FossilFuelService } from './fossil-fuel.service';

@Controller()
export class FossilFuelController {
  constructor(private readonly fossilFuelService: FossilFuelService) {}

  @Get('/horizontal-bar/data')
  public async horizontalBarData(@Req() req): Promise<any> {
    const yearWiseData =
      await this.fossilFuelService.getHorizontalBarDataByYear(req.query.year);

    return {
      status: 'success',
      data: yearWiseData,
    };
  }

  @Get('/horizontal-bar/distinct-years')
  public async distinctYears(): Promise<any> {
    const years = await this.fossilFuelService.getDistinctYears();
    return {
      status: 'success',
      data: years,
    };
  }
}
