"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contractor_controller_1 = require("./contractor.controller");
const router = (0, express_1.Router)();
router.get("/contractors", contractor_controller_1.getContractors);
exports.default = router;
