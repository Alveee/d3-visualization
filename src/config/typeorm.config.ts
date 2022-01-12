import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { FossilFuel } from 'src/fossil-fuels/entities/fossil-fuels.entity';

const CONNECTION_TYPE = 'postgres';

export default registerAs(
  'typeorm',
  (): TypeOrmModuleOptions => ({
    type: CONNECTION_TYPE,
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [FossilFuel],
    synchronize: process.env.NODE_ENV !== 'production',
    extra: {
      ssl: process.env.NODE_ENV === 'production',
    },
  }),
);
