import { Response } from "express";

export default {
  success(res: Response, { text = "", body = {}, status = 200 }) {
    res.status(status).json({ text, body });
  },

  error(res: Response, { error = "", status = 500 }) {
    res.status(status).json({ error });
  },
};
