const _router = require("express").Router();
const {createAttendance, getAttendancebyempid} = require("./attendance.controller");

_router.post("/", createAttendance);
_router.get("/:emp_id", getAttendancebyempid);

module.exports = _router;