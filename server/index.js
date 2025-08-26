import chalk from "chalk";
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import router from "./route/user.route.js";
// for accessing .env file
dotenv.config({ path: "../.env" });
// connect to db
connectDB();

const app = express();
app.use(express.json())

// user route
app.use("/api/v1/user", router)


app.listen(process.env.SERVER_PORT, () => {
    console.log(chalk.green(`Server is running on port ${process.env.SERVER_PORT}`));
})

