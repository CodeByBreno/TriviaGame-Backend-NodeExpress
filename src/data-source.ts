import { DataSource } from "typeorm";

export const datasource = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  entities:
    process.env.NODE_ENV === "production"
      ? [__dirname + "/src/entities/*/*.js"]
      : [__dirname + "/src/entities/*/*.ts"],
  migrations:
    process.env.NODE_ENV === "production"
      ? [__dirname + "/src/migrations/*.js"]
      : [__dirname + "/src/migrations/*.ts"],
  synchronize: false,
  logging: true,
});
