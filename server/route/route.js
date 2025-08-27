import { Router } from "express";
import { userRegisterController, userLoginController } from "../controller/user.controller.js";
import { addTodoController } from "../controller/todo.controller.js";
import { authenticateUser } from "../middleware/auth.middleware.js";

const router = Router();
// define user routes here
router.post("/register", userRegisterController);
router.post("/login", userLoginController);

// define todo routes here
router.post("/add",authenticateUser, addTodoController)

export default router;
