const router = require("express").Router();
const {
  checkToken
} = require("../../token_auth/token_validation");
const {
  create_Users,
  get_Users,
  get_UsersbyEid,
  login_UsersbyEid
} = require("./user.controller");
router.post("/", checkToken, create_Users);
router.get("/", checkToken, get_Users);
router.get("/:u_id", checkToken, get_UsersbyEid);
router.post("/login", login_UsersbyEid);

module.exports = router;