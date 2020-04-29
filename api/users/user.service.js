const pool = require("../../configs/database");
const {
  hashSync,
  genSaltSync,
  compareSync
} = require("bcrypt");
const {
  sign
} = require("jsonwebtoken");
module.exports = {
  create_Users: (data, callBack) => {
    pool.query(
      'insert into users(u_id, u_designation, u_email, u_password, status) values(?,?,?,?,?)',
      [
        data.u_id,
        data.u_designation,
        data.u_email,
        data.u_password,
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
  create_UsersDetails: (data, callBack) => {
    callback = callback || function () {};
    pool.query(
      `insert into users_details(u_id, firstname, lastname, nid_number, dob, blood_group, address, marital_status) values(?,?,?,?,?,?,?,?)`,
      [
        data.u_id,
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
  get_UsersbyEid: (u_id, callBack) => {
    pool.query(
      'select * from users where u_id = ?',
      [u_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        console.log(results[0].id);
        pool.query(
          'select * from users_details where u_id = ?',
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
  login_UsersbyEid: (u_id, u_password, callBack) => {
    pool.query(
      'select * from users where u_id = ?',
      [u_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        const result = compareSync(u_password, results[0].u_password);
        u_password = results[0].u_password
        if (result) {
          pool.query(
            'select * from users where u_id = ? and u_password = ?',
            [u_id, u_password],
            (error, results, fields) => {
              if (error) {
                return callBack(error);
              }
              return callBack(null, results[0]);
            }
          );
        } else {
          return callBack(error);
        }
      }
    );
  }
};