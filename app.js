require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());

app.use("/api/users", userRouter);

const port = process.env.APP_PORT || 4000;

app.listen(port, () => {
  console.log("Server up and running on PORT :", port);
});