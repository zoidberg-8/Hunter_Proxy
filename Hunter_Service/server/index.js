const express = require("express");
const mysql = require("mysql");
const db = require("../database");
const bodyParser = require("body-parser");

const app = express();
let port = process.env.PORT || 3000;
//test branch
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/dist"));

app.get("/api/suggestions", (req, res) => {
  db.getSuggestions(function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(result);
    }
  });
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
