import { MigrationInterface, QueryRunner } from "typeorm";

export class teste1679343568003 implements MigrationInterface {
    name = 'teste1679343568003'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "name" character varying(45) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "email" character varying(45) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "UQ_1f5c894f79cd0159ff4e1a44508" UNIQUE ("phone")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "UQ_1f5c894f79cd0159ff4e1a44508"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e"`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "name" character varying NOT NULL`);
    }

}
