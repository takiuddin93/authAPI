const Router = require("express").Router();
const {getAllUsers} = require("./users.controller");

Router.get("/except/:emp_id", getAllUsers);

module.exports = Router;