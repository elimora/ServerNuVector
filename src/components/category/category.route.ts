import { Router } from "express";
import { createCategory, getCategory } from "./category.controller";

const router = Router();

router.post("/category", createCategory).get("/category", getCategory);

export default router;
