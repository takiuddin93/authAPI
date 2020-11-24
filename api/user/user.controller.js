require("dotenv").config();
const {create_User, get_Usersbyemp_id, login_Usersbyemp_id} = require("./user.service");

const {genSaltSync, hashSync, compareSync} = require("bcrypt");

module.exports = {
  create_User: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.emp_password = hashSync(body.emp_password, salt);
    create_User(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          response: 0,
          message: "Database connection error"
        });
      }
      return res.status(200).json({
        response: 1,
        data: results
      });
    });
  },
  get_Usersbyemp_id: (req, res) => {
    const emp_id = req.params.emp_id;
    get_Usersbyemp_id(emp_id, (err, results) => {
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
        employee: {
          emp_id: results.emp_id,
          emp_name: results.emp_firstname + " " + results.emp_lastname,
          emp_nid: results.emp_nid,
          emp_dob: results.emp_dob,
          emp_bloodgroup: results.emp_bloodgroup,
          emp_address: results.emp_address,
          emp_maritalstatus: results.emp_maritalstatus
        },
      });
    });
  },
  login_Usersbyemp_id: (req, res) => {
    const body = req.body;
    login_Usersbyemp_id(body.emp_id, body.emp_password, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          response: 0,
          data: "Invalid employee id or password"
        });
      }
      const result = compareSync(body.emp_password, results.emp_password);
      if (result) {
        results.emp_password = undefined;
        return res.json({
          response: 1
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