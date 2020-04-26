const {
  create_Users,
  get_Users
} = require("./user.service");

const {
  hashSync,
  genSaltSync
} = require("bcrypt");

module.exports = {
  create_Users: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    console.log("Password: " + body.e_password);
    body.e_password = hashSync(body.e_password, salt);
    create_Users(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },
  get_Users: (req, res) => {
    get_Users((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },
};