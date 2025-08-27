import bcrypt from "bcrypt";
import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";
import { zodUserLoginSchema, zodUserRegisterSchema } from "../zod/validation.schema.js";

// controller for user registration
export const userRegisterController = async (req, res) => {
  const { name, email, password } = req.body;
  // for validating user input
  const validateUser = zodUserRegisterSchema.safeParse({
    name: name,
    email: email,
    password: password,
  });
  // if validation fails
  if (!validateUser.success) {
    return res
      .status(400)
      .json({ message: "Invalid user data", error: validateUser.error.issues }); // this error contains array of issues
  }

  try {
    const existingUser = await User.findOne({ email: validateUser.data.email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.SALT_ROUND)
    );
    const user = await User.create({ name, email, password: hashedPassword });
    return res
      .status(201)
      .json({ message: "User registered successfully", user });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

// controller for user login
export const userLoginController = async (req, res) => {
  const { email, password } = req.body;
  // for validating user input
  const validateLogin = zodUserLoginSchema.safeParse({
    email: email,
    password: password,
  });
  // if validation fails
  if (!validateLogin.success) {
    return res
      .status(400)
      .json({
        message: "Invalid login data",
        error: validateLogin.error.issues,
      });
  }

  try {
    const findExistingUser = await User.findOne({
      email: validateLogin.data.email,
    });
    if (!findExistingUser) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // compare password from request with hashed password in db
    const isPasswordMatch = await bcrypt.compare(
      validateLogin.data.password,
      findExistingUser.password
    );
    // if password does not match
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // token generation using jwt
    const token = jwt.sign(
      {
        id: findExistingUser._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({ message: "Login successful", token: token });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
