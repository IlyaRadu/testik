const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/services");
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
