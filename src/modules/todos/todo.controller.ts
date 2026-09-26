import { Request, Response } from "express";
import { todoServices } from "./todo.service";

const createTodo = async (req: Request, res: Response) => {
  const { user_id, title } = req.body;
  try {
    const result = await todoServices.createTodo(user_id, title);

    res.status(201).json({
      success: true,
      message: "Todo added successfully",
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getAllTodo = async (req: Request, res: Response) => {
  try {
    const result = await todoServices.getAllTodo();

    res.status(200).json({
      success: true,
      message: "Todos retrieved successfully",
      data: result.rows,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getSingleTodo = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await todoServices.getSingleTodo(id as string);

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Todo retrieved successfully",
        data: result.rows[0],
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const updateTodo = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { user_id, title } = req.body;

  try {
    const result = await todoServices.updateTodo(user_id, title, id as string);

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Todo updated successfully",
        data: result.rows[0],
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await todoServices.deleteTodo(id as string);

    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Todo deleted successfully",
        data: null,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const todoControllers = {
  createTodo,
  getAllTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
};
