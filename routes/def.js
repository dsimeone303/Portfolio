const express = require("express");
const router = express.Router();
const axios = require("axios");
const searchQuery = require("search-query-parser");

router.get("/", (req, res) => {
  res.render("wtd_index.pug", { title: "consolidate.js" });
});
router.get("/result", (req, res) => {
  //console.dir(req.query.search);// makes easier to read if you install query-parser
  const word = req.query.search,
    want = req.query.requesting,
    resultsData = { word, want };

  if (word == "") {
    const message = `Please enter a valid word.`;
    const noResults = `Please enter a valid word.`;

    return res.render("wtd_index.pug", {
      title: "wtd_index",
      message: noResults
    });
  }

  const defUrl = `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=45b56f5d-7cee-442b-8237-8d3778ead801`;
  const thesUrl = `https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=d2d3d1da-cec5-4d8e-b989-a0bc9d1eaeca`;

  function forDef() {
    axios.get(defUrl).then(response => {
      const data = response.data;
      const dataArray = [];
      let scan = typeof data[0];
      if (scan === 'string') {
        scan = false;
      } else {
        scan = true;
      }

      if (!scan) {
        const message = `Sorry, '${word}' the term cannot be found in Webster's catalog, please review the word(s) and try again.`;
        noResults = { message };
        return res.render("wtd_index.pug", {
          title: "wtd_index",
          message: message
        });
      }

      data.forEach(type => {
        const perDataArray = [];
        let id = type.meta.id;
        ids = id.split(":")[0];
        // console.log(ids);
        const grammar = type.fl;
        let definitions = [];
        type.shortdef.forEach(definition => {
          definitions.push(definition);
        });
        perDataArray.push(ids);
        perDataArray.push(grammar);
        perDataArray.push(definitions);
        dataArray.push(perDataArray);
        //}
      });
      resultsData.data = dataArray;

      //pug doesn't want to show the locals unless there individual. so that's what were gonna do:
      res.render("results.pug", {
        title: "results",
        dataArray: resultsData
      });
    });
  }
  function forThes() {
    axios.get(thesUrl).then(response => {
      const data = response.data;
      let scan = Boolean(data[0].meta);
      if (!scan) {
        const message = `Sorry, '${word}' the term cannot be found in Webster's catalog, please review the word(s) and try again.`;
        noResults = { message };
        return res.render("wtd_index.pug", {
          title: "wtd_index",
          message: message
        });
      }
      
      const dataArray = [];

      data.forEach(type => {
        const perDataArray = [];
        //add exact word
        const id = type.meta.id.split(":")[0];
        //add grammar
        const grammar = type.fl;
        const thes_def = [];
        const thes_syns = [];
        const thes_ants = [];
        //get def
        type.shortdef.forEach(thes_shortdef => {
          thes_def.push(thes_shortdef);
        });
        type.meta.syns.forEach(obj => {
          obj.forEach(syn => {
            thes_syns.push(syn);
          });
        });
        type.meta.ants.forEach(obj => {
          obj.forEach(ants => {
            thes_ants.push(ants);
          });
        });

        perDataArray.push(id);
        perDataArray.push(grammar);
        perDataArray.push(thes_def);
        perDataArray.push(thes_syns);
        perDataArray.push(thes_ants);
        dataArray.push(perDataArray);
      });

      resultsData.data = dataArray;
      res.render("results.pug", {
        title: "results",
        dataArray: resultsData
      });
    });
    //resultsData.data = dataArray;
  }

  if (want === "Definition") {
    forDef();
  }
  if (want === "Thesaurus") {
    forThes();
  }
});

module.exports = router;
