var express = require('express');
var path = require('path');
var http = require('http');
var async = require('async');

var app = express();
var server = http.Server(app);

//var io = require("socket.io").listen(server); This goes into the raspberry, i need client code

var devices = [{ host: '192.168.2.13', port: 3001 }];

var sensorData = [];
var numberOfDevices = 0;

var getData = function(device) {
        http.get({
            host: device.host,
            port: device.port,
            path: '/sensorData'
        }, (response) => {
            var body = '';
            response.on('data', function(d) {
                body += d;
            });
            response.on('end', function() {
                // Data reception is done, do whatever with it!
                var parsed = JSON.parse(body);
                //console.log('received data from ' + device.host);
                parsed.forEach(object => {
                    sensorData.push(object);
                });
                numberOfDevices++;
            });
        }).on('error', (e) => {
            console.log(`Got error: ${e.message}`);
        });
}

var getSensorData = function() {
    sensorData = [];
    numberOfDevices = 0;
    async.each(devices, getData); // it returns when all have completed
}

app.use(express.static(path.join(__dirname, 'client')));

app.get('/sensorData', function(req, res, next) {
    // console.log(sensorData);
    res.send({ data: sensorData, "numberOfDevices" : numberOfDevices});
});

// Need to connect with raspberrys and ask every tot seconds their measurements
setInterval(getSensorData, 10000);
getSensorData();

server.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
