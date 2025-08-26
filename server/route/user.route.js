import { Router } from "express";
import { User } from "../model/models.js";
const router = Router();
// define routes here
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  try {
    const existingUser = await User.findOne({email})
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create({ name, email, password });
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
