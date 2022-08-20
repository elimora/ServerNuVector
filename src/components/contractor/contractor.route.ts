import { Router } from "express";
import { getContractors } from "./contractor.controller";

const router = Router();

router.get("/contractors", getContractors);

export default router;
