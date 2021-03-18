const _router = require("express").Router();
const { createNotice, getNotice } = require("./notice.controller");

_router.post("/", createNotice);
_router.get("/:all", getNotice);

module.exports = _router;