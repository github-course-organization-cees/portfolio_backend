const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

const userRouter = require("./routes/userRoutes");

const app = express();

dotenv.config({
    path: "./config.env",
});

app.use(express.json());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.get("/", (request, response) => {
    response.status(200).json("Hello from the middleware");
});

app.use("/api/v1/users", userRouter);

module.exports = app;