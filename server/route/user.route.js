import { Router } from "express";
import { userRegisterController, userLoginController } from "../controller/user.controller.js";

const router = Router();
// define routes here
router.post("/register", userRegisterController);
router.post("/login", userLoginController);

export default router;
