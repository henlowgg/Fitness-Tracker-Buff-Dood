const router = require("express").Router();
const path = require("path");

// HTML GET Requests for all pages
// =============================================================
// Home page

// may need to change this to ../public
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public"));
});

// GET exercise page
router.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// GET stats page
router.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;