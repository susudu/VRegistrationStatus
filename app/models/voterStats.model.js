const sql = require("./db.js");
// constructor
const Status = function(status) {
  this.ssn = status.ssn;
  this.vstatus = status.vstatus
};

Status.findBySSN = (ssn, result) => {
  sql.query(`SELECT * FROM user WHERE ssn = ${ssn}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found status: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found status with the ssn
    result({ kind: "not_found" }, null);
  });
};

Status.findByVstatus = (vstatus, result) => {
  sql.query(`SELECT * FROM user WHERE vstatus = ${vstatus}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found status: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found status 
    result({ kind: "not_found" }, null);
  });
};
module.exports = Status;