require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/user/user.router");
const attendanceRouter = require("./api/attendance/attendance.router");

const moment = require("moment-timezone");
console.log(moment().tz("Asia/Dhaka").format("YYYY-MM-DD HH:mm:ss Z"));

const port = process.env.APP_PORT;
app.use(express.json());

app.use("/api/attendance", attendanceRouter);
app.use("/api/user", userRouter);


app.listen(port, () => {
  console.log(process.env);
  console.log("Server up and running on PORT :", port);
});