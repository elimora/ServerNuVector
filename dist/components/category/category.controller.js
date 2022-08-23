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
exports.getCategory = exports.createCategory = void 0;
const Category_1 = require("../../entities/Category");
const response_route_1 = __importDefault(require("../../route/response.route"));
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.createCategory = createCategory;
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const active = yield Category_1.Category.find();
        return response_route_1.default.success(res, { body: active });
    }
    catch (error) {
        if (error instanceof Error) {
            response_route_1.default.error(res, { error: error.message });
        }
    }
});
exports.getCategory = getCategory;
