const Router = require("express").Router();
const {create_User, get_Usersbyemp_id, login_Usersbyemp_id} = require("./user.controller");

Router.post("/", create_User);
Router.get("/:emp_id", get_Usersbyemp_id);
Router.post("/login", login_Usersbyemp_id);

module.exports = Router;