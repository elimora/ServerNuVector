"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const project_controller_1 = require("./project.controller");
const router = (0, express_1.Router)();
router.post("/project", project_controller_1.createProject);
router.get("/projects", project_controller_1.getProjects);
router.put("/projects/:id", project_controller_1.updataProject);
router.delete("/projects/:id", project_controller_1.deleteProject);
router.get("/projects/:id", project_controller_1.getProject);
exports.default = router;
