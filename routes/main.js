const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("main/index.html", { title: "index" });
});

module.exports = router;
