"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activity_controller_1 = require("./activity.controller");
const router = (0, express_1.Router)();
router.get("/activity", activity_controller_1.getActivity);
exports.default = router;
