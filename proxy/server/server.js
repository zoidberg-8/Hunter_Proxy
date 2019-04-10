const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = process.env.Prt || 5000;

app.use(morgan("dev"));
app.use(expres.static(path.join(dirname, "public")));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
