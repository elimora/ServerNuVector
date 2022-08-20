import { Request, Response } from "express";
import { Activity } from "../../entities/Activity";
import response from "../../route/response.route";

export const getActivity = async (req: Request, res: Response) => {
  try {
    const active = await Activity.find();
    return response.success(res, { body: active });
  } catch (error) {
    if (error instanceof Error) {
      response.error(res, { error: error.message });
    }
  }
};
