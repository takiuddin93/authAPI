require("dotenv").config();
const {createUser, getUserbyempid, loginUserbyempid} = require("./user.service");

const {genSaltSync, hashSync, compareSync} = require("bcrypt");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.emp_password = hashSync(body.emp_password, salt);
    createUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.json({
          response: 0,
          message: err
        });
      }
      if(results === body.emp_id){
        return res.status(200).json({
          response: 2,
          data: results
        });
      } else{
        return res.status(200).json({
          response: 1,
          data: results
        });
      }
    });
  },
  getUserbyempid: (req, res) => {
    const emp_id = req.params.emp_id;
    getUserbyempid(emp_id, (err, results) => {
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
  loginUserbyempid: (req, res) => {
    const body = req.body;
    loginUserbyempid(body.emp_id, body.emp_password, (err, results) => {
      if (err) {
        console.log(err);
        return res.json({
          response: 0,
          message: err
        });
      } else if (results === false) {
        console.log(results);
        console.log("Password Error");
        return res.json({
          response: 1,
          data: "Password Error"
        });
      } else if (results === true) {
        console.log(results);
        console.log("Login Approved");
        return res.json({
          response: 2,
          data: "Login Approved"
        });
      } else {
        console.log(results);
        console.log("Invalid Employee ID or Password");
        return res.json({
          response: 3,
          data: "Invalid Employee ID or Password"
        });
      }
    });
  },
};