module.exports = app => {
  const vstatus = require("../controllers/voterStatus.controller.js");
  var router = require("express").Router();
  // Retrieve all voters by status
  router.get("/vstatusBySSN", vstatus.findOne);
  // Retrieve a single voter stats with ssn
  router.get("/vstatusAll", vstatus.findAll);
  app.use('/api/vstatus', router);  
};