import chalk from "chalk";
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import router from "./route/route.js";
// for accessing .env file
dotenv.config({ path: "../.env" });
// connect to db
connectDB();

const app = express();
app.use(express.json())

// define all route
app.use("/api/v1/user", router)
app.use("/api/v1/todo", router)


app.listen(process.env.SERVER_PORT, () => {
    console.log(chalk.green(`Server is running on port ${process.env.SERVER_PORT}`));
})

