require("dotenv").config();
const {createAttendance, getAttendancebyempid} = require("./attendance.service");

module.exports = {
  createAttendance: (req, res) => {
    const body = req.body;
    createAttendance(body, (err, results) => {
      if (err) {
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
  getAttendancebyempid: (req, res) => {
    const empID = req.params.empID;
    getAttendancebyempid(empID, (err, results) => {
      if (err) {
        return res.json({
          response: 0,
          message: err
        });
      } else if (!results) {
        return res.json({
          response: 0,
          message: "Record not Found"
        });
      }
      return res.json({
        response: 1,
        data: results
      });
    });
  }
};