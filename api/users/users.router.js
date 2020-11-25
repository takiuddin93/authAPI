const Router = require("express").Router();
const {
  checkToken
} = require("../../token_auth/token_validation");
const {
  create_Users,
  get_Users,
  get_UsersbyEid,
  login_UsersbyEid
} = require("./user.controller");
Router.post("/", checkToken, create_Users);
Router.get("/", checkToken, get_Users);
Router.get("/:e_id", checkToken, get_UsersbyEid);
Router.post("/login", login_UsersbyEid);

module.exports = Router;