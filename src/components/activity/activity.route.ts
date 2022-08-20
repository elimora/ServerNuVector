import { Router } from "express";
import { getActivity } from "./activity.controller";

const router = Router();

router.get("/activity", getActivity);

export default router;
