require("dotenv").config();
const {create_Notice, get_Notice} = require("./notice.service");

module.exports = {
  create_Notice: (req, res) => {
    const body = req.body;
    create_Notice(body, (err, results) => {
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
  get_Notice: (req, res) => {
    const all = req.params.all;
    get_Notice(all, (err, results) => {
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