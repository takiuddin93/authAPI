require("dotenv").config();
const {create_Attendance, get_Attendancebyemp_id} = require("./attendance.service");

module.exports = {
  create_Attendance: (req, res) => {
    const body = req.body;
    create_Attendance(body, (err, results) => {
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
  get_Attendancebyemp_id: (req, res) => {
    const emp_id = req.params.emp_id;
    get_Attendancebyemp_id(emp_id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Console: " +results.emp_id);
      if (!results) {
        return res.json({
          response: 0,
          message: "Record not Found"
        });
      }
      return res.json({
        response: 1,
        attendance: {
          emp_id: results.emp_id,
          checkin_date: results.checkin_date,
          checkin_time: results.checkin_time,
          checkin_tz: results.checkin_tz
        },
      });
    });
  }
};