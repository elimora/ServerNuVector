"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory = void 0;
const response_route_1 = __importDefault(require("../../route/response.route"));
const createCategory = (req, res) => {
    try {
        const { category, description, active } = req.body;
        if (!category || !description || !active) {
            return response_route_1.default.error(res, {
                error: "Invalid Project Body",
                status: 400,
            });
        }
    }
    catch (error) { }
};
exports.createCategory = createCategory;
