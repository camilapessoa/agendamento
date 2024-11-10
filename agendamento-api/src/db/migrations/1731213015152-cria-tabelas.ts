import { MigrationInterface, QueryRunner } from "typeorm";

export class CriaTabelas1731213015152 implements MigrationInterface {
    name = 'CriaTabelas1731213015152'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "appointment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "location" character varying NOT NULL, CONSTRAINT "UQ_7300368385b6ccb264581d015bf" UNIQUE ("date", "location"), CONSTRAINT "PK_e8be1a53027415e709ce8a2db74" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "appointment"`);
    }

}
