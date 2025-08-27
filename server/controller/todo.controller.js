import { Todo } from "../model/todo.model.js";
import { zodAddTodoSchema } from "../zod/validation.schema.js";

// add todo controller
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

// get own todos controller
export const getOwnTodosController = async (req, res) => {
  try {
    const todos = await Todo.find({ creatorId: req.user }).sort({
      createdAt: -1,
    });
    // console.log("todos", todos)
    return res
      .status(200)
      .json({ message: "Todos fetched successfully", todos });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

// update todo controller
export const updateTodoController = async (req, res) => {
  const { id } = req.params;

  const { title, description, status } = req.body;

  const validateTodo = zodAddTodoSchema.partial().safeParse({
    title: title,
    description: description,
    status: status,
  });
  if (!validateTodo.success) {
    return res
      .status(400)
      .json({ message: "Invalid todo data", error: validateTodo.error.issues });
  }

  // if validation is successful update todo to db
  // try {
  //   const todo = await Todo.findOneAndUpdate(
  //     { _id: id, creatorId: req.user },
  //     { $set: validateTodo.data },
  //     { new: true }
  //   );
  //   if (!todo) {
  //     return res.status(404).json({ message: "Todo not found" });
  //   }
  //   return res.status(200).json({ message: "Todo updated successfully", todo });
  // } catch (error) {
  //   return res.status(500).json({ message: "Server error" });
  // }

  try {
    // get the todo by id
    const existingTodo = await Todo.findById(id);
    if (!existingTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    // check if the todo belongs to the user
    if (existingTodo.creatorId.toString() !== req.user) {
      return res
        .status(403)
        .json({ message: "You are not authorized to update this todo" });
    }
    // if validation is successful update todo to db
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { $set: validateTodo.data },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "Todo updated successfully", todo: updatedTodo });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

// delete todo controller (optional)
export const deleteTodoController = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const existingTodo = await Todo.findById(id);
    if (!existingTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    // check if the todo belongs to the user
    if (existingTodo.creatorId.toString() !== req.user) {
      return res
        .status(403)
        .json({ message: "You are not authorized to delete this todo" });
    }
    // delete the todo
    await Todo.findByIdAndDelete(id);
    return res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
