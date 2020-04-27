require("dotenv").config();
const {
  create_Users,
  get_Users,
  get_UsersbyEid,
  login_UsersbyEid
} = require("./user.service");

const {
  hashSync,
  genSaltSync,
  compareSync
} = require("bcrypt");
const {
  sign
} = require("jsonwebtoken");

module.exports = {
  create_Users: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.e_password = hashSync(body.e_password, salt);
    create_Users(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          response: 0,
          message: "Database connection errror"
        });
      }
      return res.status(200).json({
        response: 1,
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
        response: 1,
        data: results
      });
    });
  },
  get_UsersbyEid: (req, res) => {
    const e_id = req.params.e_id;
    get_UsersbyEid(e_id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          response: 0,
          message: "Record not Found"
        });
      }
      results.password = undefined;
      return res.json({
        response: 1,
        employee: results
      });
    });
  },
  login_UsersbyEid: (req, res) => {
    const body = req.body;
    login_UsersbyEid(body.e_id, body.e_password, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          response: 0,
          data: "Invalid employee id or password"
        });
      }
      const result = compareSync(body.e_password, results.e_password);
      if (result) {
        results.e_password = undefined;
        const jsontoken = sign({
          result: results
        }, 'takiuddin93', {
          expiresIn: "1h"
        });
        return res.json({
          response: "ok",
          token: jsontoken
        });
      } else {
        return res.json({
          response: 0,
          data: "Invalid employee id or password"
        });
      }
    });
  },
};