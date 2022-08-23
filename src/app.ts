import express from "express";
import morgan from "morgan";
import cors from "cors";

import categoryRoutes from "./components/category/category.route";
import clientRout from "./components/client/client.route";
import projectRoutes from "./components/project/project.route";
import taskRoutes from "./components/task/task.route";
import contractorRoutes from "./components/contractor/contractor.route";
import activityRoutes from "./components/activity/activity.route";
import productsRouts from "./components/product/product.route";

import { json } from "stream/consumers";

import dotnet from "dotenv";

const app = express();
const router = express.Router();

if (app.get("env") === "development") {
  dotnet.config();
}

app
  .use(morgan("dev"))
  .use(cors())
  .use(express.json())
  .use(express.static("public"));

router
  .use(clientRout)
  .use(projectRoutes)
  .use(taskRoutes)
  .use(categoryRoutes)
  .use(contractorRoutes)
  .use(activityRoutes)
  .use(productsRouts);

app.use("/api", router);

export default app;
