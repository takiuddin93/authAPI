const Router = require("express").Router();
const {create_User, get_Userbyemp_id, login_Userbyemp_id} = require("./user.controller");

Router.post("/", create_User);
Router.get("/:emp_id", get_Userbyemp_id);
Router.post("/login", login_Userbyemp_id);

module.exports = Router;