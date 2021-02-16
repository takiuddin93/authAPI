require("dotenv").config();
const {getAllUsers} = require("./users.service");

module.exports = {
  getAllUsers: (req, res) => {
    const emp_id = req.params.emp_id;
    getAllUsers(emp_id, (err, results) => {
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