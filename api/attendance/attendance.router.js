const Router = require("express").Router();
const {createAttendance, getAttendancebyempid} = require("./attendance.controller");

Router.post("/", createAttendance);
Router.get("/:emp_id", getAttendancebyempid);

module.exports = Router;