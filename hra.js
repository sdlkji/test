//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
  var smoking = req.body.smoking;
var seatbelt = req.body.seatbelt;
var health = req.body.health;

  var overallScore = 100;

  console.log(overallScore);

  if (smoking == 'smokingCurrent') {
    overallScore = overallScore - 10;
  } else if (smoking == 'smokingFormer10') {
    overallScore = overallScore - 5;
  }

  if (seatbelt == 'seatbeltNo') {
    overallScore = overallScore - 1;
  }

  if (health == 'healthFair') {
    overallScore = overallScore - 1;
  } else if (health == 'healthPoor') {
    overallScore = overallScore - 2;
  }
  console.log(overallScore);

  res.send('Your HRA is ' + overallScore);
});



app.listen(3000, function(req, res) {
  console.log("server started on port 3000");
});
