const router = require("express").Router();
const {
  get_Users,
  create_Users
} = require("./user.controller");
router.get("/", get_Users);
router.post("/", create_Users);

module.exports = router;