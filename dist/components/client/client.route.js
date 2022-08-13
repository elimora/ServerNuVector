"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_controller_1 = require("./client.controller");
const router = (0, express_1.Router)();
router.route("/clients").post(client_controller_1.createClient).get(client_controller_1.getClients);
router
    .route("/clients/:id")
    .put(client_controller_1.updateClient)
    .delete(client_controller_1.deleteClient)
    .get(client_controller_1.getClient);
exports.default = router;
