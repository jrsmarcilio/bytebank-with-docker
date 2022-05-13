import { MigrationInterface, QueryRunner } from "typeorm";

export class updateTransfer1652398766402 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `transfers` CHANGE `value` `value` decimal(8,2) NOT NULL DEFAULT 0"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `transfers` CHANGE `value` `value` decimal(8,2) NOT NULL DEFAULT 0"
    );
  }
}
