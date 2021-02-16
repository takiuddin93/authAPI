const Router = require("express").Router();
const {createUser, getUserbyempid, loginUserbyempid} = require("./user.controller");

Router.post("/", createUser);
Router.get("/:emp_id", getUserbyempid);
Router.post("/login", loginUserbyempid);

module.exports = Router;