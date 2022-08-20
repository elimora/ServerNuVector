import { Request, Response } from "express";
import { Contractor } from "../../entities/Contractor";
import response from "../../route/response.route";

export const getContractors = async (req: Request, res: Response) => {
  try {
    const contractors = await Contractor.find();
    return response.success(res, { body: contractors });
  } catch (error) {
    if (error instanceof Error) {
      response.error(res, { error: error.message });
    }
  }
};
