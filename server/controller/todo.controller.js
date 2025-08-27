import zod from "zod";
import { Todo } from "../model/todo.model.js";
import { zodAddTodoSchema } from "../zod/validation.schema.js";

export const addTodoController = async (req, res) => {
  
  const { title, description, status } = req.body;

  const validateTodo = zodAddTodoSchema.safeParse({
    title: title,
    description: description,
    status: status,
  });
  if (!validateTodo.success) {
    return res
      .status(400)
      .json({ message: "Invalid todo data", error: validateTodo.error.issues });
  }
  // if validation is successful save todo to db
  try {
    const todo = await Todo.create({
      ...validateTodo.data,
      creatorId: req.user,
    });
    return res.status(201).json({ message: "Todo created successfully", todo });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
