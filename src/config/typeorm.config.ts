import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { FossilFuel } from 'src/fossil-fuels/entities/fossil-fuels.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'd3_visualization',
  entities: [FossilFuel],
  synchronize: true,
};
