require("dotenv").config();
const {createNotice, getNotice} = require("./notice.service");

module.exports = {
  createNotice: (req, res) => {
    const body = req.body;
    createNotice(body, (err, results) => {
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
  getNotice: (req, res) => {
    const all = req.params.all;
    getNotice(all, (err, results) => {
      if (err) {
        console.log(err);
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
      console.log(results.length + " records found");
      return res.json({
        response: 1,
        data: results
      });
    });
  }
};