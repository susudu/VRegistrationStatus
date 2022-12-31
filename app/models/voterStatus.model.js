const sql = require("./db.js");
// constructor
const Status = function(status) {
  this.ssn = status.ssn;
  this.vstatus = status.vstatus
};

Status.findBySSN = (ssn, result) => {
  sql.query(`SELECT ssn as SSN, CONCAT(fname," ",lname) as Voter_Name , vstatus as Voter_Status FROM user WHERE ssn = '${ssn}'`, (err, res) => {
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
  let query = "SELECT vstatus as Voter_Status ,COUNT(iduser) AS Vcount FROM user";
  if (vstatus) {
    query += ` WHERE vstatus = '${vstatus}'`;
  }
  query += ` GROUP BY vstatus`;
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("statistics: ", res);
    result(null, res);
  });
};
module.exports = Status;