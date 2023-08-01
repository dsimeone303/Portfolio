const express = require("express");
const hostname = "0.0.0.0";
const https = require("https");
const port = 3000;
//add compression api
const compression = require("compression");
const helmet = require("helmet");
const searchQuery = require("search-query-parser");
const axios = require("axios");
const swig = require("swig-templates");
const app = express();
const fs = require("fs");

//DATABASE: see sqlConnection
/*
const database = require("./sqlConnection");
app.get("/createDatabase", (req, res) => {
  let databaseName = "dts_db";

  let createQuery = `CREATE DATABASE ${databaseName}`;
  //use query to create a Database
  database.query(createQuery, err => {
    if (err) throw err;

    console.log("Database Created Successfully!");
    let useQuery = `USE #{databaseName}`;
    database.query(useQuery, error => {
      if (error) throw error;

      console.log("using Database");

      return res.send(`created and using ${databaseName} Database`);
    });
  });
});
*/
//////end database sequence

//initite middleware
const bodyParser = require("body-parser");

//const app = express();
app.use(compression()); //compresses routes
app.use(helmet());

//stylesheets
app.use("/static", express.static("public"));
//middleware
app.use(bodyParser.urlencoded({ extended: true }));
//intiate view engine as pug:
//app.set("view engine", "pug");
const cons = require("consolidate");
app.engine("html", cons.swig);
app.engine("pug", cons.pug);

//add routes
//index
const mainpage = require("./routes/main");
app.use("/", mainpage);
//What's the Def
const whatsThedef = require("./routes/def");
app.use("/whatsthedef", whatsThedef);
//Simon Says
const simon = require("./routes/simon");
app.use("/simon", simon);
/*const letsEat = require("./routes/LetsEat");
app.use("/LetsEat", letsEat);
*/

app.use((err, req, res, next) => {
  if (res.headerSent) {
    return next(err);
  }
  res.status(e500);
  res.render("error", { error: err });
});

app.listen(port, () => {
  console.log("application is running on local host 3000");
});
