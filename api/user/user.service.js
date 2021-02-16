void

function () {};

const pool = require("../../configs/database");
const {
    hashSync,
    genSaltSync,
    compareSync
  } = require("bcrypt");
const moment = require("moment-timezone");

module.exports = {
  createUser: (data, callBack) => {
    pool.query(
      "SELECT * FROM users WHERE emp_id = ?",
      [data.emp_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        } else if (results[0]!=null) {
          return callBack(null, results[0].emp_id); 
        } else {
          pool.query(
            "INSERT INTO users(emp_id, emp_designation, emp_email, emp_password, status, created_at, modified_at) VALUES(?,?,?,?,?,'"+ moment().tz("Asia/Dhaka").format("YYYY-MM-DD HH:mm:ss") +"','" + moment().tz("Asia/Dhaka").format("YYYY-MM-DD HH:mm:ss") + "')",
            [
              data.emp_id,
              data.emp_designation,
              data.emp_email,
              data.emp_password,
              data.status,
              data.created_at,
              data.modified_at
            ],
            (error, results, fields) => {
              if (error) {
                return callBack(error);
              }
              return callBack(null, results);
            }
          );
        }
      }
    );
  },
  getUserbyempid: (emp_id, callBack) => {
    pool.query(
      "SELECT * FROM users WHERE emp_id = ?",
      [emp_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        pool.query(
          "SELECT * FROM users_details WHERE emp_id = '" + results[0].emp_id + "'",
          [results[0].id],
          (error, results, fields) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      }
    );
  },
  loginUserbyempid: (emp_id, emp_password, callBack) => {
    pool.query(
      "SELECT emp_password FROM users WHERE emp_id = ?",
      [emp_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        } else if (results[0]!=null) {
          const comparepass = compareSync(emp_password, results[0].emp_password);
          if (comparepass) {
            return callBack(null, comparepass);
          } else {
            return callBack(null, comparepass);
          }
        } else{
          return callBack(null, results[0]);
        }
      }
    );
  }
};