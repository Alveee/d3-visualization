import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('fossil_fuels')
export class FossilFuel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: '2',
  })
  state: string;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'float' })
  coal: number;

  @Column({ type: 'float' })
  conventional_hydroelectric: number;

  @Column({ type: 'float' })
  natural_gas: number;

  @Column({ type: 'float', default: 0 })
  nuclear: number;

  @Column({ type: 'float', default: 0 })
  other: number;

  @Column({ type: 'float', default: 0 })
  other_gases: number;

  @Column({ type: 'float' })
  other_renewables_total: number;

  @Column({ type: 'float' })
  petroleum_coke: number;

  @Column({ type: 'float' })
  petroleum_liquids: number;

  @Column({ type: 'float' })
  renewables: number;
}
