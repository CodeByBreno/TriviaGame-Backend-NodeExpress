"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateDatabase1730984665852 = void 0;
class CreateDatabase1730984665852 {
  constructor() {
    this.name = 'CreateDatabase1730984665852';
  }
  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "match_question" ("id_match_question" varchar PRIMARY KEY NOT NULL, "text" varchar NOT NULL, "image_url" varchar, "QUESTION" integer NOT NULL, "answer_a" varchar NOT NULL, "answer_b" varchar NOT NULL, "answer_c" varchar NOT NULL, "answer_d" varchar NOT NULL, "answer_e" varchar, "answer_f" varchar, "equivalent_answer_a" varchar NOT NULL, "equivalent_answer_b" varchar NOT NULL, "equivalent_answer_c" varchar NOT NULL, "equivalent_answer_d" varchar NOT NULL, "equivalent_answer_e" varchar, "equivalent_answer_f" varchar, "type" varchar NOT NULL, "time" integer)`);
    await queryRunner.query(`CREATE TABLE "basic_question" ("id_basic_question" varchar PRIMARY KEY NOT NULL, "text" varchar NOT NULL, "image_url" varchar, "QUESTION" integer NOT NULL, "answer_a" varchar NOT NULL, "answer_b" varchar NOT NULL, "answer_c" varchar NOT NULL, "answer_d" varchar NOT NULL, "answer_e" varchar, "answer_f" varchar, "correct" varchar NOT NULL, "type" varchar NOT NULL, "time" integer, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime)`);
  }
  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "basic_question"`);
    await queryRunner.query(`DROP TABLE "match_question"`);
  }
}
exports.CreateDatabase1730984665852 = CreateDatabase1730984665852;