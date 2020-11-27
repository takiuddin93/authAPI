require("dotenv").config();
const {get_All_Users} = require("./users.service");

module.exports = {
  get_All_Users: (req, res) => {
    const emp_id = req.params.emp_id;
    get_All_Users(emp_id, (err, results) => {
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
      } else {
        console.log(results.length + " records found");
        return res.json({
          response: 1,
          data: results
        });
      }
    });
  }
};