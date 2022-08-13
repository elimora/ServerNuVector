import { Router } from "express";
import {
  createProject,
  getProjects,
  updataProject,
  deleteProject,
  getProject,
} from "./project.controller";

const router = Router();

router.post("/project", createProject);
router.get("/projects", getProjects);
router.put("/projects/:id", updataProject);
router.delete("/projects/:id", deleteProject);
router.get("/projects/:id", getProject);

export default router;
