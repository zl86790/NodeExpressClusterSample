var express = require("express");
var router = express.Router();
var cluster = require("cluster");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: cluster.worker.id });
});

module.exports = router;
