import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FossilFuel } from './entities/fossil-fuels.entity';
import { FossilFuelController } from './fossil-fuel.controller';
import { FossilFuelService } from './fossil-fuel.service';

@Module({
  imports: [TypeOrmModule.forFeature([FossilFuel])],
  controllers: [FossilFuelController],
  providers: [FossilFuelService],
})
export class FossilFuelModule {}
