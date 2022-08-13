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
exports.getClient = exports.deleteClient = exports.updateClient = exports.getClients = exports.createClient = void 0;
const Client_1 = require("../../entities/Client");
const response_route_1 = __importDefault(require("../../route/response.route"));
const createClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, city, state, country } = req.body;
        if (!name || !city || !state || !country) {
            return response_route_1.default.error(res, { error: "Invalid body.", status: 400 });
        }
        const client = Client_1.Client.create(req.body);
        yield client.save();
        return response_route_1.default.success(res, {
            text: "Client added successfully.",
            body: client,
        });
    }
    catch (error) {
        console.error(error);
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createClient = createClient;
const getClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clients = yield Client_1.Client.find();
        return response_route_1.default.success(res, { body: clients });
    }
    catch (error) {
        if (error instanceof Error) {
            response_route_1.default.error(res, { error: error.message });
        }
    }
});
exports.getClients = getClients;
const updateClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, city, state, country } = req.body;
        if (!name || !city || !state || !country) {
            return response_route_1.default.error(res, { error: "Invalid body.", status: 400 });
        }
        const client = yield Client_1.Client.findOneBy({ id });
        if (!client) {
            return response_route_1.default.error(res, {
                error: "Client does not exists.",
                status: 404,
            });
        }
        const updated = yield Client_1.Client.save(Object.assign(Object.assign({}, req.body), { id }));
        return response_route_1.default.success(res, {
            text: "Client updated successfully!",
            body: Object.assign(Object.assign({}, client), updated),
            status: 200,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            response_route_1.default.error(res, { error: error.message });
        }
    }
});
exports.updateClient = updateClient;
const deleteClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Client_1.Client.delete({ id });
        if (result.affected === 0) {
            return response_route_1.default.error(res, { error: "User not found.", status: 404 });
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
exports.deleteClient = deleteClient;
const getClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const client = yield Client_1.Client.findOneBy({ id });
        if (client === null) {
            return response_route_1.default.error(res, {
                error: "User not found.",
                status: 404,
            });
        }
        return response_route_1.default.success(res, { body: client });
    }
    catch (error) {
        if (error instanceof Error) {
            return response_route_1.default.error(res, { error: error.message });
        }
    }
});
exports.getClient = getClient;
