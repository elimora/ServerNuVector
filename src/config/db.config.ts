import { DataSource } from "typeorm";
import { Client } from "../entities/Client";
import { Contractor } from "../entities/Contractor";
import { Project } from "../entities/Project";
import { Product } from "../entities/Produtc";
import { Category } from "../entities/Category";
import { Activity } from "../entities/Activity";
import { Task } from "../entities/Task";
import { env } from "process";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: env.DB_HOST,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  port: 3306 || process.env,
  database: env.DB_NAME,
  entities: [Client, Contractor, Project, Product, Category, Activity, Task],
  logging: true,
  synchronize: true,
});
