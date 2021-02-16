void

function () {};

const pool = require("../../configs/database");
const moment = require("moment-timezone");

module.exports = {
  createAttendance: (data, callBack) => {
    console.log(data);
    pool.query(
      "INSERT INTO attendance(emp_id, checkin_date, checkin_time, attendance_type, checkin_tz, created_at, modified_at) VALUES(?,?,?,?,'"
      + moment().tz("Asia/Dhaka").format("YYYY-MM-DD HH:mm:ssZ")
      + "','"
      + moment().tz("Asia/Dhaka").format("YYYY-MM-DD HH:mm:ss")
      + "','"
      + moment().tz("Asia/Dhaka").format("YYYY-MM-DD HH:mm:ss") + "')",
      [
        data.emp_id,
        data.checkin_date,
        data.checkin_time,
        data.attendance_type,
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
  getAttendancebyempid: (emp_id, callBack) => {
    pool.query(
      "SELECT * FROM attendance WHERE emp_id = ?",
      [emp_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};