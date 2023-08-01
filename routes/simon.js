const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("simon/simon.html", { title: "simon" });
});

module.exports = router;
