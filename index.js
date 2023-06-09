const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

const phoneData = require("./data/phones.json");

app.get("/", (req, res) => {
  res.json("all good in here");
});

app.get("/phones", (req, res) => {
  console.log(phoneData);
  res.status(200).json(phoneData);
});

app.get("/phones/:id", (req, res) => {
  res.json(phoneData[parseInt(req.params.id) - 1]);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
