module.exports = app => {
  const vstatus = require("../controllers/voterStats.controller.js");
  var router = require("express").Router();
  // Retrieve all voters by status
  router.get("/:vstatus", vstatus.findAll);
  // Retrieve a single voter stats with ssn
  router.get("/:ssn", vstatus.findOne);
  app.use('/api/vstatus', router);  
};