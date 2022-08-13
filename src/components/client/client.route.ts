import { Router } from "express";
import {
  createClient,
  getClients,
  updateClient,
  deleteClient,
  getClient,
} from "./client.controller";
const router = Router();

router.route("/clients").post(createClient).get(getClients);
router
  .route("/clients/:id")
  .put(updateClient)
  .delete(deleteClient)
  .get(getClient);

export default router;
