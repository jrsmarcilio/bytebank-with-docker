import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTransfer1652275929482 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "transfer",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
            generationStrategy: "increment",
          },
          {
            name: "value",
            type: "decimal",
            precision: 8,
            scale: 2,
            isNullable: false,
          },
          {
            name: "destination",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "transfer",
            type: "varchar",
            length: "10",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "datetime",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "datetime",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("transfer")
  }
}
