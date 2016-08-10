var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World from Raspberry Pi 2!');
});

app.get('/sensorData', function (req, res) {
 res.send({ title: "Temperature", "value": Math.floor(Math.random()*100) });
});

app.listen(3001, function () {
  console.log('Raspberry Pi 2 listening');
});