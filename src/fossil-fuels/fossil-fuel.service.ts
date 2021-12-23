import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FossilFuel } from './entities/fossil-fuels.entity';

@Injectable()
export class FossilFuelService {
  constructor(
    @InjectRepository(FossilFuel)
    private fossilFuelRepository: Repository<FossilFuel>,
  ) {}

  public async getHorizontalBarDataByYear(year: number): Promise<any> {
    const data = await this.fossilFuelRepository.query(
      `SELECT state, sum(renewables) as renewables FROM fossil_fuels WHERE EXTRACT (YEAR FROM date) = '${year}' GROUP BY state ORDER BY renewables DESC`,
    );

    let totalRenewables = 0;
    data.map((item) => {
      totalRenewables += item.renewables;
    });

    data.map(
      (item) => (item.renewables = (item.renewables / totalRenewables) * 100),
    );
    return data;
  }

  public async getDistinctYears(): Promise<number[]> {
    const data = await this.fossilFuelRepository.query(
      `SELECT DISTINCT EXTRACT (YEAR FROM date) as year FROM fossil_fuels ORDER BY year ASC`,
    );
    return data.map((item) => item.year);
  }
}
