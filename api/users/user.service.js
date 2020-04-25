const pool = require("../../configs/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into users(e_id, e_email, e_password, status) values(?,?,?,?)`,
      [
        data.e_id,
        data.e_email,
        data.e_password,
        data.status
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};