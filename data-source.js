import { DataSource } from "typeorm";

const datasource = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  entities: ["dist/entities/**/*.js"],
  migrations: ["dist/migrations/*.js"],
  synchronize: false,
  logging: true,
});

module.exports = { datasource };
