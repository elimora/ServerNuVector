import { Request, Response } from "express";
import { FindManyOptions, ILike } from "typeorm";
import { Project } from "../../entities/Project";
import response from "../../route/response.route";
import { IGetProjectsQuery } from "./project.interface";

export const createProject = async (
  req: Request<any, any, Project>,
  res: Response
) => {
  try {
    const { name, description, active, client } = req.body;
    if (!client || !name || !description || !active) {
      return response.error(res, {
        error: "Invalid Project Body",
        status: 400,
      });
    }

    const project = Project.create(req.body);
    await project.save();

    return response.success(res, {
      text: "Succefully created",
      body: req.body,
    });
  } catch (error) {
    if (error instanceof Error) {
      return;
      // return res.status(500).json({ error: error.message });
    }
  }
};

export const getProjects = async (
  req: Request<any, any, Project, IGetProjectsQuery>,
  res: Response
) => {
  try {
    const { client, name } = req.query;
    const query: FindManyOptions<Project>["where"] = [];

    if (client) {
      query.push({ client: { id: client } });
    }
    if (name) {
      query.push({ name: ILike(`%${name}%`) });
    }

    const options: FindManyOptions<Project> = {};

    if (query.length > 0) {
      options.where = query;
    }
    const projects = await Project.find(options);
    // await Project.save<Project>({
    //   ...req.body,
    //   products: [{ id: 1 }],
    // });
    // await Project.save<Project>({
    //   ...req.body,
    //   products: [...req.body.products, { id: 24 }],
    // });

    // await Project.save<Project>({
    //   ...req.body,
    //   products: req.body.products.filter((product) => product.id !== 30),
    // });
    return response.success(res, { body: projects });
  } catch (error) {
    if (error instanceof Error) {
      response.error(res, { error: error.message });
    }
  }
};

export const updataProject = async (
  req: Request<{ id: string }, any, Project>,
  res: Response
) => {
  try {
    const { id } = req.params;
    const { name, description, active, client } = req.body;

    if (!name || !description || !client) {
      return response.error(res, {
        error: "Invalid project body to update",
        status: 400,
      });
    }
    const project = await Project.findOneBy({ id });
    if (!project) {
      return response.error(res, {
        error: "Project does not exist",
        status: 404,
      });
    }
    const updatedProject = await Project.save({ ...req.body, id });

    return response.success(res, {
      text: "Project updated successfuly",
      body: {
        ...project,
        ...updatedProject,
      },
      status: 200,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Project.delete({ id });
    if (result.affected === 0) {
      return response.error(res, { error: "Project not found.", status: 404 });
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

export const getProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = await Project.findOneBy({ id });
    if (project === null) {
      return response.error(res, {
        error: "Project not found.",
        status: 404,
      });
    }
    return response.success(res, { text: "We found it", body: project });
  } catch (error) {
    if (error instanceof Error) {
      return response.error(res, { error: error.message });
    }
  }
};
