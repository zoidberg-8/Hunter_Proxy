const express = require("express");
const proxy = require("http-proxy-middleware");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.Prt || 5000;

app.use(cors());

app.use(express.static(__dirname + "/../public"));

app.use("/shoes/:id", express.static(__dirname + "/../public"));

app.use("/shoes/", express.static(__dirname + "/../public"));

const suggestionsProxy = proxy({
  target: "http://localhost:3000",
  changeOrigin: true
});
app.use("/shoes/:id/suggestions", suggestionsProxy);

const descriptionProxy = proxy({
  target: "http://localhost:4000",
  changeOrigin: true
});
app.use("/shoes/:id/description", descriptionProxy);

const reviewsProxy = proxy({
  target: "http://localhost:7000",
  changeOrigin: true
});
app.use("/shoes/:id/reviews", reviewsProxy);

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
