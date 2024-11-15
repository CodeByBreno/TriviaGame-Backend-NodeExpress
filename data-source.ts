import { DataSource } from "typeorm";

export const datasource = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  entities: ["src/entities/**/*.ts", "dist/entities/**/*.js"],
  migrations: ["src/migrations/*.ts", "dist/migrations/*.js"],
  synchronize: false,
  logging: true,
});
