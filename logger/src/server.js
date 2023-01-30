const express = require("express");
const app = express();
const currentYear = new Date().getFullYear();
var index = require("./index.js");

// index.info("Write to console");
const send = (req, res, message) => {
  res.send(message);
  index.write(`${new Date().toUTCString()}-${req.method} "${message}"`);
};

app
  .get("/", (req, res) => {
    send(req, res, "Morning");
  })
  .patch("/greet", (req, res) => {
    send(req, res, "Good Evening");
  });

app.patch("/greet", (req, res) => {
  send(req, res, "Good Evening");
});

app.post("/bye", (req, res) => {
  send(req, res, "Good Night");
});

app.get("/date/:year-:month-:day", function (req, res, next) {
  if (req.params.year < currentYear) {
    res.send("This year is in the past");
  } else if (req.params.year > currentYear) {
    res.send("This year is in the future");
  }
});

app.listen(8080, function () {});
