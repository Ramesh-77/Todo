import chalk from 'chalk';
import express from 'express';
import dotenv from 'dotenv';
// for accessing .env file
dotenv.config({path: '../.env'})
const app = express()

app.listen(process.env.SERVER_PORT, () => {
    console.log(chalk.green(`Server is running on port ${process.env.SERVER_PORT}`));
})
