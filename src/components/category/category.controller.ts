import { Request, Response } from "express";
import { Category } from "../../entities/Category";
import response from "../../route/response.route";

export const createCategory = async (
  req: Request<any, any, Category>,
  res: Response
) => {
  try {
    const { category, description, active } = req.body;
    if (!category || !description || !active) {
      return response.error(res, {
        error: "Invalid Project Body",
        status: 400,
      });
    }
  } catch (error) {}
};
