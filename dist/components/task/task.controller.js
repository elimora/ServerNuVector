"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskEntry = exports.deleteTaskEntry = exports.updateTaskEntry = exports.getTaskEntries = exports.createTaskEntry = void 0;
const Task_1 = require("../../entities/Task");
const response_route_1 = __importDefault(require("../../route/response.route"));
const createTaskEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { duration, contractor, project, product, activity, category, client, description, billable_flag, date, } = req.body;
        console.log(req.body); ///////////////
        if (!duration ||
            !contractor ||
            !project ||
            !product ||
            !activity ||
            !category ||
            !client ||
            !description ||
            !billable_flag ||
            !date) {
            return response_route_1.default.error(res, {
                error: "Invalid task-entry body eli mora",
                status: 500,
            });
        }
        const task = Task_1.Task.create(req.body);
        yield task.save();
        const created = yield Task_1.Task.findOneBy({ id: task.id });
        if (!created) {
            return response_route_1.default.error(res, { error: "Error fetching register." });
        }
        return response_route_1.default.success(res, {
            text: "Successfully task-entry Created",
            //body: created, is not ok
            body: created,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            return response_route_1.default.error(res, { error: error.message });
        }
    }
});
exports.createTaskEntry = createTaskEntry;
const getTaskEntries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { client, order } = req.query;
        const query = [];
        const options = {};
        if (query.length > 0) {
            options.where = query;
        }
        const queryBuilder = Task_1.Task.getRepository()
            .createQueryBuilder("task")
            .leftJoinAndMapOne("task.client", "task.client", "client")
            .leftJoinAndMapOne("task.contractor", "task.contractor", "contractor")
            .leftJoinAndMapOne("task.project", "task.project", "project")
            .leftJoinAndMapOne("task.product", "task.product", "products")
            .leftJoinAndMapOne("task.activity", "task.activity", "activity")
            .leftJoinAndMapOne("task.category", "task.category", "category");
        if (client) {
            queryBuilder.andWhere("client.name LIKE :clientName", {
                clientName: `%${client}%`,
            });
        }
        if (order) {
            const parsedOrder = order.split(",").map((clause) => ({
                field: clause.split(" ")[0],
                direction: clause.split(" ")[1].toUpperCase(),
            })); // client asc, project desc => [{ field: "client", direction: "asc" }, "project desc"] =>
            for (const orderObj of parsedOrder) {
                queryBuilder.addOrderBy(orderObj.field, orderObj.direction);
            }
        }
        const tasks = (yield queryBuilder.getMany()).map((entry) => entry);
        return response_route_1.default.success(res, { body: tasks });
    }
    catch (error) {
        if (error instanceof Error) {
            response_route_1.default.error(res, { error: error.message });
        }
    }
});
exports.getTaskEntries = getTaskEntries;
const updateTaskEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { duration, contractor, project, product, activity, category, client, description, billable_flag, } = req.body;
        if (!duration ||
            !contractor ||
            !project ||
            !product ||
            !activity ||
            !category ||
            !client ||
            !description ||
            !billable_flag) {
            return response_route_1.default.error(res, {
                error: "Invalid task-entry body to update",
                status: 500,
            });
        }
        const task = yield Task_1.Task.findOneBy({ id });
        if (!task) {
            return response_route_1.default.error(res, {
                error: "Project does not exist",
                status: 404,
            });
        }
        const updataTask = yield Task_1.Task.save(Object.assign(Object.assign({}, req.body), { id }));
        return response_route_1.default.success(res, {
            text: "task updated successfully",
            body: Object.assign(Object.assign({}, task), updataTask),
            status: 200,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        }
    }
});
exports.updateTaskEntry = updateTaskEntry;
const deleteTaskEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const resultDeleteTask = yield Task_1.Task.delete({ id });
        if (resultDeleteTask.affected === 0) {
            response_route_1.default.error(res, { error: "Task not found", status: 404 });
        }
        return response_route_1.default.success(res, { status: 204 });
    }
    catch (error) {
        if (error instanceof Error) {
            return response_route_1.default.error(res, { error: error.message });
        }
    }
});
exports.deleteTaskEntry = deleteTaskEntry;
const getTaskEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const findTask = yield Task_1.Task.findOneBy({ id });
        if (findTask === null) {
            return response_route_1.default.error(res, { error: "task not found", status: 404 });
        }
        return response_route_1.default.success(res, { text: "task found it", body: { findTask } });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
});
exports.getTaskEntry = getTaskEntry;
