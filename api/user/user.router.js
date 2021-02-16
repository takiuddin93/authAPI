const _router = require("express").Router();
const {createUser, getUserbyempid, loginUserbyempid} = require("./user.controller");

_router.post("/", createUser);
_router.get("/:emp_id", getUserbyempid);
_router.post("/login", loginUserbyempid);

module.exports = _router;