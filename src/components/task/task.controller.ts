import { Request, Response } from "express";
import { FindManyOptions, ILike } from "typeorm";
import { Task } from "../../entities/Task";
import response from "../../route/response.route";
import { IGetTaskEntriesQuery } from "./task.interface";

export const createTaskEntry = async (
  req: Request<any, any, Task>,
  res: Response
) => {
  try {
    const {
      duration,
      contractor,
      project,
      product,
      activity,
      category,
      client,
      description,
      billable_flag,
      date,
    } = req.body;
    console.log(req.body); ///////////////
    if (
      !duration ||
      !contractor ||
      !project ||
      !product ||
      !activity ||
      !category ||
      !client ||
      !description ||
      !billable_flag ||
      !date
    ) {
      return response.error(res, {
        error: "Invalid task-entry body eli mora",
        status: 500,
      });
    }

    const task = Task.create(req.body);
    await task.save();
    const created = await Task.findOneBy({ id: task.id });

    if (!created) {
      return response.error(res, { error: "Error fetching register." });
    }

    return response.success(res, {
      text: "Successfully task-entry Created",
      //body: created, is not ok
      body: created,
    });
  } catch (error) {
    if (error instanceof Error) {
      return response.error(res, { error: error.message });
    }
  }
};

export const getTaskEntries = async (
  req: Request<any, any, any, IGetTaskEntriesQuery>,
  res: Response
) => {
  try {
    const { client, order } = req.query;
    const query: FindManyOptions<Task>["where"] = [];

    const options: FindManyOptions<Task> = {};

    if (query.length > 0) {
      options.where = query;
    }

    const queryBuilder = Task.getRepository()
      .createQueryBuilder("task")
      .leftJoinAndMapOne("task.client", "task.client", "client")
      .leftJoinAndMapOne("task.contractor", "task.contractor", "contractor")
      .leftJoinAndMapOne("task.project", "task.project", "project")
      .leftJoinAndMapOne("task.product", "task.product", "products")
      .leftJoinAndMapOne("task.activity", "task.activity", "activity")
      .leftJoinAndMapOne("task.category", "task.category", "category");

    if (client) {
      queryBuilder.andWhere("client.name LIKE :clientName", {
        clientName: `%${client}%`,
      });
    }

    if (order) {
      const parsedOrder = order.split(",").map((clause) => ({
        field: clause.split(" ")[0],
        direction: clause.split(" ")[1].toUpperCase() as "ASC" | "DESC",
      })); // client asc, project desc => [{ field: "client", direction: "asc" }, "project desc"] =>
      for (const orderObj of parsedOrder) {
        queryBuilder.addOrderBy(orderObj.field, orderObj.direction);
      }
    }
    const tasks = (await queryBuilder.getMany()).map((entry) => entry);
    return response.success(res, { body: tasks });
  } catch (error) {
    if (error instanceof Error) {
      response.error(res, { error: error.message });
    }
  }
};

export const updateTaskEntry = async (
  req: Request<{ id: string }, any, Task>,
  res: Response
) => {
  try {
    const { id } = req.params;
    const {
      duration,
      contractor,
      project,
      product,
      activity,
      category,
      client,
      description,
      billable_flag,
    } = req.body;
    if (
      !duration ||
      !contractor ||
      !project ||
      !product ||
      !activity ||
      !category ||
      !client ||
      !description ||
      !billable_flag
    ) {
      return response.error(res, {
        error: "Invalid task-entry body to update",
        status: 500,
      });
    }

    const task = await Task.findOneBy({ id });

    if (!task) {
      return response.error(res, {
        error: "Project does not exist",
        status: 404,
      });
    }

    const updataTask = await Task.save({ ...req.body, id });

    return response.success(res, {
      text: "task updated successfully",
      body: { ...task, ...updataTask },
      status: 200,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
  }
};

export const deleteTaskEntry = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const resultDeleteTask = await Task.delete({ id });

    if (resultDeleteTask.affected === 0) {
      response.error(res, { error: "Task not found", status: 404 });
    }
    return response.success(res, { status: 204 });
  } catch (error) {
    if (error instanceof Error) {
      return response.error(res, { error: error.message });
    }
  }
};

export const getTaskEntry = async (
  req: Request<any, any, Task>,
  res: Response
) => {
  try {
    const { id } = req.params;
    const findTask = await Task.findOneBy({ id });

    if (findTask === null) {
      return response.error(res, { error: "task not found", status: 404 });
    }

    return response.success(res, { text: "task found it", body: { findTask } });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};
