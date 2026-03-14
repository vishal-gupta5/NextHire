const express = require("express");
require("dotenv").config({});
const connectDB = require("./config/database");
const app = express();
const PORT = process.env.PORT || 4000;

app.use("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`The app is successfully running on PORT ${PORT}`);
});
