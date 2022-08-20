"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Client_1 = require("../entities/Client");
const Contractor_1 = require("../entities/Contractor");
const Project_1 = require("../entities/Project");
const Produtc_1 = require("../entities/Produtc");
const Category_1 = require("../entities/Category");
const Activity_1 = require("../entities/Activity");
const Task_1 = require("../entities/Task");
const process = require("process");
exports.AppDataSource = new typeorm_1.DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: 3306 || process.env,
  database: process.env.DB_NAME,
  entities: [
    Client_1.Client,
    Contractor_1.Contractor,
    Project_1.Project,
    Produtc_1.Product,
    Category_1.Category,
    Activity_1.Activity,
    Task_1.Task,
  ],
  logging: true,
  synchronize: true,
});
