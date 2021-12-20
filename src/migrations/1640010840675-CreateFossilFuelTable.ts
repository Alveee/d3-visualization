import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFossilFuelTable1640009479662 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'fossil_fuels',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'state',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'date',
          },
          {
            name: 'coal',
            type: 'float',
          },
          {
            name: 'conventional_hydroelectric',
            type: 'float',
          },
          {
            name: 'natural_gas',
            type: 'float',
          },
          {
            name: 'nuclear',
            type: 'float',
            default: 0,
          },
          {
            name: 'other',
            type: 'float',
            default: 0,
          },
          {
            name: 'other_gases',
            type: 'float',
            default: 0,
          },
          {
            name: 'other_renewables_total',
            type: 'float',
          },
          {
            name: 'petroleum_coke',
            type: 'float',
          },
          {
            name: 'petroleum_liquids',
            type: 'float',
          },
          {
            name: 'renewables',
            type: 'float',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('fossil_fuels');
  }
}
