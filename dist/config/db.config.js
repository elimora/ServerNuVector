"use strict";
var _a;
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
const process_1 = require("process");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process_1.env.DB_HOST,
    username: process_1.env.DB_USERNAME,
    password: process_1.env.DB_PASSWORD,
    port: +((_a = process_1.env.DB_PORT) !== null && _a !== void 0 ? _a : 3306),
    database: process_1.env.DB_NAME,
    entities: [Client_1.Client, Contractor_1.Contractor, Project_1.Project, Produtc_1.Product, Category_1.Category, Activity_1.Activity, Task_1.Task],
    synchronize: true,
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});
