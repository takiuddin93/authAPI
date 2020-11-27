const Router = require("express").Router();
const {get_All_Users} = require("./users.controller");

Router.get("/except/:emp_id", get_All_Users);

module.exports = Router;