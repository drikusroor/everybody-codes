const express = require("express");
const app = express();
const getData = require("../shared/getData");

app.get("/", async (_req, res) => {
  res.send("Please use the /data endpoint to get the Camera data.");
});

// TODO: Move route to separate module within API
app.get("/data", async (_req, res) => {
  const data = await getData(__dirname + "/../data/cameras-defb.csv");
  res.json(data);
});

app.listen(3000);
