import { Request, Response } from "express";
import { Client } from "../../entities/Client";
import response from "../../route/response.route";

export const createClient = async (
  req: Request<any, any, Client>,
  res: Response
) => {
  try {
    const { name, city, state, country } = req.body;

    if (!name || !city || !state || !country) {
      return response.error(res, { error: "Invalid body.", status: 400 });
    }

    const client = Client.create(req.body);

    await client.save();

    return response.success(res, {
      text: "Client added successfully.",
      body: client,
    });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getClients = async (req: Request, res: Response) => {
  try {
    const clients = await Client.find();
    return response.success(res, { body: clients });
  } catch (error) {
    if (error instanceof Error) {
      response.error(res, { error: error.message });
    }
  }
};

export const updateClient = async (
  req: Request<{ id: string }, any, Client>,
  res: Response
) => {
  try {
    const { id } = req.params;
    const { name, city, state, country } = req.body;
    console.log(req.body);
    if (!name || !city || !state || !country) {
      return response.error(res, { error: "Invalid body.", status: 400 });
    }

    const client = await Client.findOneBy({ id });

    if (!client) {
      return response.error(res, {
        error: "Client does not exists.",
        status: 404,
      });
    }
    console.log({ ...req.body, id });
    const updated = await Client.save({ ...req.body, id });
    return response.success(res, {
      text: "Client updated successfully!",
      body: {
        ...client,
        ...updated,
      },
      status: 200,
    });
  } catch (error) {
    if (error instanceof Error) {
      response.error(res, { error: error.message });
    }
  }
};

export const deleteClient = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Client.delete({ id });
    if (result.affected === 0) {
      return response.error(res, { error: "User not found.", status: 404 });
    }
    return response.success(res, {
      status: 204,
    });
  } catch (error) {
    if (error instanceof Error) {
      return response.error(res, { error: error.message });
    }
  }
};

export const getClient = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const client = await Client.findOneBy({ id });
    if (client === null) {
      return response.error(res, {
        error: "User not found.",
        status: 404,
      });
    }
    return response.success(res, { body: client });
  } catch (error) {
    if (error instanceof Error) {
      return response.error(res, { error: error.message });
    }
  }
};
