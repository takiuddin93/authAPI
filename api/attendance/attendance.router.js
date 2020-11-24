const Router = require("express").Router();
const {create_Attendance, get_Attendancebyemp_id} = require("./attendance.controller");

Router.post("/", create_Attendance);
Router.get("/:emp_id", get_Attendancebyemp_id);

module.exports = Router;