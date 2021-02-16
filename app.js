require("dotenv").config();
const express = require("express");
const app = express();
const attendanceRouter = require("./api/attendance/attendance.router");
const noticeRouter = require("./api/notice/notice.router");
const userRouter = require("./api/user/user.router");
const usersRouter = require("./api/users/users.router");

const moment = require("moment-timezone");
var dateFormat = require("dateformat");

const port = process.env.APP_PORT;
app.use(express.json());

app.use("/api/attendance", attendanceRouter);
app.use("/api/notice", noticeRouter);
app.use("/api/user", userRouter);
app.use("/api/users", usersRouter);


app.listen(port, () => console.log("Server up and running on port ${port}!"));