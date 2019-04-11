const express = require("express");
//const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.Prt || 5000;

app.use(express.static(__dirname + "/../public"));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
