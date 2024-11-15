import { DataSource } from "typeorm";

export const datasource = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  entities: ["src/entities/**/*.ts", "src/entities/**/*.js"],
  migrations: ["src/migrations/*.ts", "src/migrations/*.js"],
  synchronize: false,
  logging: true,
});
