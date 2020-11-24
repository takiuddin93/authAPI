void

function () {};

const pool = require("../../configs/database");
const moment = require("moment-timezone");

module.exports = {
  create_Attendance: (data, callBack) => {
    pool.query(
      "INSERT INTO attendance(emp_id, checkin_date, checkin_time, checkin_tz, created_at, modified_at) VALUES(?,?,?,'" + moment().tz("Asia/Dhaka").format("YYYY-MM-DD HH:mm:ss Z") + "','"+ moment().tz("Asia/Dhaka").format("YYYY-MM-DD HH:mm:ss") +"','" + moment().tz("Asia/Dhaka").format("YYYY-MM-DD HH:mm:ss") + "')",
      [
        data.emp_id,
        data.checkin_date,
        data.checkin_time,
        data.checkin_tz,
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
  },
  get_Attendancebyemp_id: (emp_id, callBack) => {
    pool.query(
      'SELECT * FROM attendance WHERE emp_id = ?',
      [emp_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        console.log("Record found: " + results.emp_id);
        return callBack(null, results);
      }
    );
  }
};