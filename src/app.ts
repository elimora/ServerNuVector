import express from "express";
import morgan from "morgan";
import cors from "cors";

import categoryRoutes from "./components/category/category.route";
import clientRout from "./components/client/client.route";
import projectRoutes from "./components/project/project.route";
import taskRoutes from "./components/task/task.route";

import { json } from "stream/consumers";

import dotnet from "dotenv";

const app = express();

if (app.get("env") === "development") {
  dotnet.config();
}

app
  .use(morgan("dev"))
  .use(cors())
  .use(express.json())
  .use(express.static("public"));

app.use(clientRout).use(projectRoutes).use(taskRoutes).use(categoryRoutes);

export default app;
