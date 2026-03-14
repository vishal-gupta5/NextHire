const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.use("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`The app is successfully running on PORT ${PORT}`);
});
