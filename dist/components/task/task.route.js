"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = require("./task.controller");
const router = (0, express_1.Router)();
router
    .get("/tasks-entries", task_controller_1.getTaskEntries)
    .post("/task-entries", task_controller_1.createTaskEntry)
    .put("/task-entries/:id", task_controller_1.updateTaskEntry)
    .delete("/task-entries/:id", task_controller_1.deleteTaskEntry)
    .get("/task-entry/:id", task_controller_1.getTaskEntry);
exports.default = router;
