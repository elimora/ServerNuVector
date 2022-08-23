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
  type: "postgres",
  host: env.DB_HOST,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  port: +(env.DB_PORT ?? 3306),
  database: env.DB_NAME,
  entities: [Client, Contractor, Project, Product, Category, Activity, Task],
  synchronize: true,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
