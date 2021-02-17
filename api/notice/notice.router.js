const router = require("express").Router();
const {createNotice, getNotice} = require("./notice.controller");

router.post("/", createNotice);
router.get("/:all", getNotice);

module.exports = router;