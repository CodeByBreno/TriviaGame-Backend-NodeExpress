import { DataSource } from "typeorm";
import * as path from "path";

export const datasource = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  entities:
    process.env.NODE_ENV === "production"
      ? [path.resolve(__dirname, "entities/**/*.js")]
      : [path.resolve(__dirname, "entities/**/*.ts")],
  migrations:
    process.env.NODE_ENV === "production"
      ? [path.resolve(__dirname, "migrations/**/*.js")]
      : [path.resolve(__dirname, "migrations/**/*.ts")],
  synchronize: false,
  logging: true,
});
