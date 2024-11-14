import { DataSource } from "typeorm";

export const datasource = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  entities:
    process.env.NODE_ENV === "production"
      ? [__dirname + "/../entities/*/*.js"]
      : [__dirname + "/../entities/*/*.ts"],
  migrations:
    process.env.NODE_ENV === "production"
      ? [__dirname + "/../migrations/*.js"]
      : [__dirname + "/../migrations/*.ts"],
  synchronize: false,
  logging: true,
});
