"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.datasource = void 0;
var _typeorm = require("typeorm");
const datasource = exports.datasource = new _typeorm.DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  entities: ["../entities/*/*.ts"],
  migrations: ["../migrations/*.ts"],
  synchronize: false,
  logging: true
});