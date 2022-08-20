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

export const getCategory = async (req: Request, res: Response) => {
  try {
    const active = await Category.find();
    return response.success(res, { body: active });
  } catch (error) {
    if (error instanceof Error) {
      response.error(res, { error: error.message });
    }
  }
};
