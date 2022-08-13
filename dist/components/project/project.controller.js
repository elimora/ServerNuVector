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
exports.getProject = exports.deleteProject = exports.updataProject = exports.getProjects = exports.creteProject = void 0;
const typeorm_1 = require("typeorm");
const Project_1 = require("../../entities/Project");
const response_route_1 = __importDefault(require("../../route/response.route"));
const creteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, active, client } = req.body;
        if (!client || !name || !description || !active) {
            return response_route_1.default.error(res, {
                error: "Invalid Project Body",
                status: 400,
            });
        }
        const project = Project_1.Project.create(req.body);
        yield project.save();
        return response_route_1.default.success(res, {
            text: "Succefully created",
            body: req.body,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        }
    }
});
exports.creteProject = creteProject;
const getProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { client, name } = req.query;
        const query = [];
        console.log(name);
        if (client) {
            query.push({ client: { id: client } });
        }
        if (name) {
            query.push({ name: (0, typeorm_1.ILike)(`%${name}%`) });
        }
        const options = {};
        if (query.length > 0) {
            options.where = query;
        }
        const projects = yield Project_1.Project.find(options);
        yield Project_1.Project.save(Object.assign(Object.assign({}, req.body), { products: [{ id: 1 }] }));
        yield Project_1.Project.save(Object.assign(Object.assign({}, req.body), { products: [...req.body.products, { id: 24 }] }));
        yield Project_1.Project.save(Object.assign(Object.assign({}, req.body), { products: req.body.products.filter((product) => product.id !== 30) }));
        return response_route_1.default.success(res, { body: projects });
    }
    catch (error) {
        if (error instanceof Error) {
            response_route_1.default.error(res, { error: error.message });
        }
    }
});
exports.getProjects = getProjects;
const updataProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, description, active, client } = req.body;
        if (!name || !description || !client) {
            return response_route_1.default.error(res, {
                error: "Invalid project body to update",
                status: 400,
            });
        }
        const project = yield Project_1.Project.findOneBy({ id });
        if (!project) {
            return response_route_1.default.error(res, {
                error: "Project does not exist",
                status: 404,
            });
        }
        const updatedProject = yield Project_1.Project.save(Object.assign(Object.assign({}, req.body), { id }));
        return response_route_1.default.success(res, {
            text: "Project updated successfuly",
            body: Object.assign(Object.assign({}, project), updatedProject),
            status: 200,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        }
    }
});
exports.updataProject = updataProject;
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Project_1.Project.delete({ id });
        if (result.affected === 0) {
            return response_route_1.default.error(res, { error: "Project not found.", status: 404 });
        }
        return response_route_1.default.success(res, {
            status: 204,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            return response_route_1.default.error(res, { error: error.message });
        }
    }
});
exports.deleteProject = deleteProject;
const getProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const project = yield Project_1.Project.findOneBy({ id });
        if (project === null) {
            return response_route_1.default.error(res, {
                error: "Project not found.",
                status: 404,
            });
        }
        return response_route_1.default.success(res, { text: "We found it", body: project });
    }
    catch (error) {
        if (error instanceof Error) {
            return response_route_1.default.error(res, { error: error.message });
        }
    }
});
exports.getProject = getProject;
