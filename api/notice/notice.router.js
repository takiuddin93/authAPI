const Router = require("express").Router();
const {createNotice, getNotice} = require("./notice.controller");

Router.post("/", createNotice);
Router.get("/:all", getNotice);

module.exports = Router;