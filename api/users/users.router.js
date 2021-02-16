const _router = require("express").Router();
const {getAllUsers} = require("./users.controller");

_router.get("/except/:emp_id", getAllUsers);

module.exports = _router;