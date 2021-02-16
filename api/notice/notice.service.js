void

function () {};

const pool = require("../../configs/database");
const moment = require("moment-timezone");

module.exports = {
  create_Notice: (data, callBack) => {
    console.log('dhukse');
    console.log(data);
    pool.query(
      "INSERT INTO notice(text, image, url, priority, posted_by, created_at, modified_at) VALUES(?,?,?,?,?,'"
      + moment().tz("Asia/Dhaka").format("YYYY-MM-DD HH:mm:ss")
      + "','"
      + moment().tz("Asia/Dhaka").format("YYYY-MM-DD HH:mm:ss") + "')",
      [
        data.text,
        data.image,
        data.url,
        data.priority,
        data.posted_by,
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
  get_Notice: (all, callBack) => {
    console.log(all);
    pool.query(
      'SELECT * FROM notice_board',
      [all],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};