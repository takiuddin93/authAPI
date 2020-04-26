const router = require("express").Router();
const {
  create_Users,
  get_Users,
  get_UsersbyEid,
  login
} = require("./user.controller");
router.post("/", create_Users);
router.get("/", get_Users);
router.get("/:e_id", get_UsersbyEid);
router.post("/login", login);

module.exports = router;