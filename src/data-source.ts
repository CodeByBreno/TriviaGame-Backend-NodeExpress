import { DataSource } from "typeorm";

export const datasource = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  entities: ["src/entities/*/*.ts"],
  migrations: ["src/migrations/*.ts"],
  synchronize: false,
  logging: true,
});
