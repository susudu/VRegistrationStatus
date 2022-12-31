const Status = require("../models/voterStatus.model.js");

// Retrieve all voter Status from the database
exports.findAll = (req, res) => {
  
};
// Find a single voter detail with ssn
exports.findOne = (req, res) => {
  
};

// Retrieve all voters by status from the database
exports.findAll = (req, res) => {
  Status.findByVstatus(req.params.vstatus, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Voters by status."
      });
    else res.send(data);
  });
};

//Retrieve a single object
exports.findOne = (req, res) => {
  Status.findBySSN(req.params.ssn, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found voter with ssn ${req.params.ssn}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving voter Status with ssn" + req.params.ssn
        });
      }
    } else res.send(data);
  });
};

