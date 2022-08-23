"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("./category.controller");
const router = (0, express_1.Router)();
router.post("/category", category_controller_1.createCategory).get("/category", category_controller_1.getCategory);
exports.default = router;
