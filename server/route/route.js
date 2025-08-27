import { Router } from "express";
import { userRegisterController, userLoginController } from "../controller/user.controller.js";
import { addTodoController, deleteTodoController, getOwnTodosController, updateTodoController } from "../controller/todo.controller.js";
import { authenticateUser } from "../middleware/auth.middleware.js";

const router = Router();
// define user routes here
router.post("/register", userRegisterController);
router.post("/login", userLoginController);

// define todo routes here
router.post("/add",authenticateUser, addTodoController)
router.get('/get-own-todos', authenticateUser, getOwnTodosController)
router.put('/update/:id', authenticateUser, updateTodoController)
router.delete('/delete/:id', authenticateUser, deleteTodoController)

export default router;
