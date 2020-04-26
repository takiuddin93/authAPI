const router = require("express").Router();
const {
  create_Users,
  get_Users,
  get_Users_E_Id
} = require("./user.controller");
router.post("/", create_Users);
router.get("/", get_Users);
router.get("/:e_id", get_Users_E_Id);

module.exports = router;