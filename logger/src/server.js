const express = require("express");
const app = express();
const currentYear = new Date().getFullYear();

app.get("/", (req, res) => {
  res.send("Morning");
});

app.patch("/greet", (req, res) => {
  res.send("Good Evening");
});

app.post("/bye", (req, res) => {
  res.send("Good Night");
});


app.get('/date/:year-:month-:day', function(req, res, next){
  if (req.params.year < currentYear) {
    res.send("This year is in the past");
  } else if(req.params.year > currentYear) {
    res.send("This year is in the future")
  }
});

app.listen(8080, function() {
});
