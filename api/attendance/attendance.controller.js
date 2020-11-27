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
          message: err
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
      } else if (!results) {
        return res.json({
          response: 0,
          message: "Record not Found"
        });
      }
      console.log(results.length + " records found");
      return res.json({
        response: 1,
        data: results
      });
    });
  }
};