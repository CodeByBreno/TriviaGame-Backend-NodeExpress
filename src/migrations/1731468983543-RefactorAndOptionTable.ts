import { MigrationInterface, QueryRunner } from "typeorm";

export class RefactorAndOptionTable1731468983543 implements MigrationInterface {
    name = 'RefactorAndOptionTable1731468983543'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "option_question" ("id_answer_question" varchar PRIMARY KEY NOT NULL, "text" varchar NOT NULL, "correct" boolean NOT NULL, "type" varchar NOT NULL, "equivalent_option_id" varchar, "question_id" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime, CONSTRAINT "REL_742ef973861de24b619b38988f" UNIQUE ("equivalent_option_id"))`);
        await queryRunner.query(`CREATE TABLE "temporary_basic_question" ("id_basic_question" varchar PRIMARY KEY NOT NULL, "text" varchar NOT NULL, "image_url" varchar, "QUESTION" integer NOT NULL, "type" varchar NOT NULL, "time" integer, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime)`);
        await queryRunner.query(`INSERT INTO "temporary_basic_question"("id_basic_question", "text", "image_url", "QUESTION", "type", "time", "created_at", "updated_at", "deleted_at") SELECT "id_basic_question", "text", "image_url", "QUESTION", "type", "time", "created_at", "updated_at", "deleted_at" FROM "basic_question"`);
        await queryRunner.query(`DROP TABLE "basic_question"`);
        await queryRunner.query(`ALTER TABLE "temporary_basic_question" RENAME TO "basic_question"`);
        await queryRunner.query(`CREATE TABLE "temporary_option_question" ("id_answer_question" varchar PRIMARY KEY NOT NULL, "text" varchar NOT NULL, "correct" boolean NOT NULL, "type" varchar NOT NULL, "equivalent_option_id" varchar, "question_id" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime, CONSTRAINT "REL_742ef973861de24b619b38988f" UNIQUE ("equivalent_option_id"), CONSTRAINT "FK_742ef973861de24b619b38988f5" FOREIGN KEY ("equivalent_option_id") REFERENCES "option_question" ("id_answer_question") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_256b5dd902bda3d5b129f2ba52a" FOREIGN KEY ("question_id") REFERENCES "basic_question" ("id_basic_question") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_option_question"("id_answer_question", "text", "correct", "type", "equivalent_option_id", "question_id", "created_at", "updated_at", "deleted_at") SELECT "id_answer_question", "text", "correct", "type", "equivalent_option_id", "question_id", "created_at", "updated_at", "deleted_at" FROM "option_question"`);
        await queryRunner.query(`DROP TABLE "option_question"`);
        await queryRunner.query(`ALTER TABLE "temporary_option_question" RENAME TO "option_question"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "option_question" RENAME TO "temporary_option_question"`);
        await queryRunner.query(`CREATE TABLE "option_question" ("id_answer_question" varchar PRIMARY KEY NOT NULL, "text" varchar NOT NULL, "correct" boolean NOT NULL, "type" varchar NOT NULL, "equivalent_option_id" varchar, "question_id" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime, CONSTRAINT "REL_742ef973861de24b619b38988f" UNIQUE ("equivalent_option_id"))`);
        await queryRunner.query(`INSERT INTO "option_question"("id_answer_question", "text", "correct", "type", "equivalent_option_id", "question_id", "created_at", "updated_at", "deleted_at") SELECT "id_answer_question", "text", "correct", "type", "equivalent_option_id", "question_id", "created_at", "updated_at", "deleted_at" FROM "temporary_option_question"`);
        await queryRunner.query(`DROP TABLE "temporary_option_question"`);
        await queryRunner.query(`ALTER TABLE "basic_question" RENAME TO "temporary_basic_question"`);
        await queryRunner.query(`CREATE TABLE "basic_question" ("id_basic_question" varchar PRIMARY KEY NOT NULL, "text" varchar NOT NULL, "image_url" varchar, "QUESTION" integer NOT NULL, "answer_a" varchar NOT NULL, "answer_b" varchar NOT NULL, "answer_c" varchar NOT NULL, "answer_d" varchar NOT NULL, "answer_e" varchar, "answer_f" varchar, "correct" varchar NOT NULL, "type" varchar NOT NULL, "time" integer, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime)`);
        await queryRunner.query(`INSERT INTO "basic_question"("id_basic_question", "text", "image_url", "QUESTION", "type", "time", "created_at", "updated_at", "deleted_at") SELECT "id_basic_question", "text", "image_url", "QUESTION", "type", "time", "created_at", "updated_at", "deleted_at" FROM "temporary_basic_question"`);
        await queryRunner.query(`DROP TABLE "temporary_basic_question"`);
        await queryRunner.query(`DROP TABLE "option_question"`);
    }

}
