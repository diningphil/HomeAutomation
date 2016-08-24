var fs = require('fs');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World from Raspberry Pi 2!');
});

app.get('/sensorData', function (req, res) {
  var obj = JSON.parse(fs.readFileSync('data.txt', 'utf8'));
  res.send(obj);
});

app.listen(3001, function () {
  console.log('Raspberry Pi 2 listening');
});