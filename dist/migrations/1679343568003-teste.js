"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teste1679343568003 = void 0;
class teste1679343568003 {
    constructor() {
        this.name = 'teste1679343568003';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "User" DROP COLUMN "name"`);
            yield queryRunner.query(`ALTER TABLE "User" ADD "name" character varying(45) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "User" DROP COLUMN "email"`);
            yield queryRunner.query(`ALTER TABLE "User" ADD "email" character varying(45) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email")`);
            yield queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "UQ_1f5c894f79cd0159ff4e1a44508" UNIQUE ("phone")`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "UQ_1f5c894f79cd0159ff4e1a44508"`);
            yield queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e"`);
            yield queryRunner.query(`ALTER TABLE "User" DROP COLUMN "email"`);
            yield queryRunner.query(`ALTER TABLE "User" ADD "email" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "User" DROP COLUMN "name"`);
            yield queryRunner.query(`ALTER TABLE "User" ADD "name" character varying NOT NULL`);
        });
    }
}
exports.teste1679343568003 = teste1679343568003;
