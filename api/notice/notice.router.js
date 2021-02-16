const Router = require("express").Router();
const {create_Notice, get_Notice} = require("./notice.controller");

Router.post("/", create_Notice);
Router.get("/:all", get_Notice);

module.exports = Router;