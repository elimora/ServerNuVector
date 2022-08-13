import { Router } from "express";
import {
  getTaskEntries,
  createTaskEntry,
  updateTaskEntry,
  deleteTaskEntry,
  getTaskEntry,
} from "./task.controller";

const router = Router();

router
  .get("/tasks-entries", getTaskEntries)
  .post("/task-entries", createTaskEntry)
  .put("/task-entries/:id", updateTaskEntry)
  .delete("/task-entries/:id", deleteTaskEntry)
  .get("/task-entry/:id", getTaskEntry);

export default router;
