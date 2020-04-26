const router = require("express").Router();
const {
  create_Users,
  get_Users,
  search_By_e_id,
  login
} = require("./user.controller");
router.post("/", create_Users);
router.get("/", get_Users);
router.get("/:e_id", search_By_e_id);

module.exports = router;