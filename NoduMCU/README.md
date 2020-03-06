# Azure-esp8266
Code for connecting NodeMCU ESP8266 to azure IoThub
This the code was made by Microsoft and i just changed some parts of it.
To run this code c
1. Open app.ino
2. Input your wifi SSID and password
3. Input your primary connection string
4. Upload the code to NoduMCU esp8266
5. Open up the console and see if the data is been sent to azure cloud
You might see the esp module reseting a few times. This is becauses it isn't getting a response from iothub. Give it a few minutes and it should start senting data. If its still reseting, check if you have entered the correct primary connection string or not.

