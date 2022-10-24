const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.port || 5000;

app.use(cors());

const catagory = require("./Data/catagories.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/catagory", (req, res) => {
  res.send(catagory);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
