"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const client_route_1 = __importDefault(require("./components/client/client.route"));
const project_route_1 = __importDefault(require("./components/project/project.route"));
const task_route_1 = __importDefault(require("./components/task/task.route"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
if (app.get("env") === "development") {
    dotenv_1.default.config();
}
app.use((0, morgan_1.default)("dev")).use((0, cors_1.default)()).use(express_1.default.json());
app.use(client_route_1.default).use(project_route_1.default).use(task_route_1.default);
exports.default = app;
