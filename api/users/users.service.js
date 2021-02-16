void

function () {};

const pool = require("../../configs/database");

module.exports = {
  getAllUsers: (emp_id, callBack) => {
    pool.query("SELECT * FROM users_details WHERE emp_id != ?",[emp_id],
    (error, results, fields) => {
      if (error) {
        return callBack(error);
      }else{
        return callBack(null, results);}
    });
  }
};