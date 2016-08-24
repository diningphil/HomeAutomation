from sense_hat import SenseHat
import sys
import time
import json
sense = SenseHat()

sense.set_rotation(180)
if len(sys.argv) > 1:
    sense.show_message(sys.argv[1], scroll_speed=0.03)
else:
    sense.show_message("Starting measurements", scroll_speed=0.05)

while True:
	humidity = "{0:.2f}".format(sense.get_humidity()) 
#	print("Humidity: %s %%rH" % humidity)

	temp = "{0:.2f}".format(sense.get_temperature())
#	print("Temperature: %s C" % temp)

	pressure = "{0:.2f}".format(sense.get_pressure())
#	print("Pressure: %s Millibars" % pressure)
	
	data = [{"title": "Temperature", "value": temp}, { "title": "Humidity", 
"value": humidity }, { "title": "Pressure", "value": pressure }]
	with open('data.txt', 'w') as outfile:
    		json.dump(data, outfile)
	time.sleep(10);