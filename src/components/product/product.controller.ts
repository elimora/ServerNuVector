import { Request, Response } from "express";
import { Product } from "../../entities/Produtc";
import response from "../../route/response.route";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    return response.success(res, { body: products });
  } catch (error) {
    if (error instanceof Error) {
      response.error(res, { error: error.message });
    }
  }
};
