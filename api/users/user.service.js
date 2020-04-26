const pool = require("../../configs/database");

module.exports = {
  create_Users: (data, callBack) => {
    pool.query(
      'insert into users(e_id, e_designation, e_email, e_password, status) values(?,?,?,?,?)',
      [
        data.e_id,
        data.e_designation,
        data.e_email,
        data.e_password,
        data.status
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  create_Users_Details: (data, callBack) => {
    callback = callback || function () {};
    pool.query(
      `insert into users_details(u_id, firstname, lastname, nid_number, dob, blood_group, address, marital_status) values(?,?,?,?,?,?,?,?)`,
      [
        data.e_id,
        data.firstname,
        data.lastname,
        data.nid_number,
        data.dob,
        data.blood_group,
        data.address,
        data.marital_status
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  get_Users: (callBack) => {
    pool.query(
      'select * from users',
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  get_Users_E_Id: (e_id, callBack) => {
    pool.query(
      'select * from users where e_id = ?',
      [e_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};