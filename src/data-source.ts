import { DataSource } from "typeorm";

export const datasource = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  entities: ["../entities/*/*.ts"],
  migrations: ["../migrations/*.ts"],
  synchronize: false,
  logging: true,
});
