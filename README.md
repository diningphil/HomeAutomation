# HomeAutomation
## Angular2 -- Express -- NodeJS to interact with Raspberry Sensor Hat (not necessarily) and display sensors' data.

### Instructions to run:

1. In the main folder type `cd client && npm install && tsc && cd .. && npm install`

2. run `python sensor.py` on the raspberry device in order to put data measurements in a file called "data.txt" 

3. run `node raspiServer.js` in your device (default port is 3001. IMPORTANT NOTE: it gets data from "data.txt")

4. adjust device's IP address in server.js to enable a connection between server and devices

5. run `node server.js` on the main machine and test it in localhost:3000

Note: You find a .mdj file in the main folder --> open it with StarUML if you want to visualize a couple of diagrams showing the simple architecture of the project.

## What if you do not own a raspberry or a Sense Hat?
  Simply modify the function on raspiServer.js (GET sensorData) to return whatever data you want, assuming you respect the JSON schema stated in the mdj file (otherwise the Server and the Angular2 App won't understand it)

## TODO
0. (I'm lazy) provide an image of the JSON data exchange schema for this application
1. Provide extensibility
2. Improve front-end graphics

