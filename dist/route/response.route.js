"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    success(res, { text = "", body = {}, status = 200 }) {
        res.status(status).json({ text, body });
    },
    error(res, { error = "", status = 500 }) {
        res.status(status).json({ error });
    },
};
