import { MigrationInterface, QueryRunner } from "typeorm";

export class userPhone1679331411038 implements MigrationInterface {
    name = 'userPhone1679331411038'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "phone" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "phone" character varying NOT NULL`);
    }

}
