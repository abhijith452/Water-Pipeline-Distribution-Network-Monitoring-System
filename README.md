# Water-Pipeline-Distribution-Network-Monitoring-System

This a system capable of monitoring water distribution pipeline network. The parameter been collected are ph, water pressure and flowrate. The value of these parameters are been collected by ph senors,water flow sensors and water pressure sensor which are connected to arduino UNO board. These readings are sent to the NodeMCU esp8266 board and it sent the reading to the Azure Iothub. The reading the recieved by Azure Iothub is fetched by the webapp and been plotted in the graphs available in the web app.

## Setup

### Setting up Azure Iothub

* Create an account in Microsoft Azure
* Create a new Resource Group  
* Create Iothub and add a new device
* Copy the primary connection string of the device

### Setting up the hardware

Connect the D6 and D5 pins of NodeMCU esp8266 to D6 and D5 pins respectively.

#### Arduino Uno

The code given in the repo doesn't contain the actual code required to read values from the sensor. The code only sents the a random value. Upload the code to arduino

#### NodeMCU

* Open nodeMCU code given in the path : `Water-Pipeline-Distribution-Network-Monitoring-System/NodeMCU`
* Input your SSID, PASSWORD and primary connection string of the AzureIotHub to app.ino
* Upload the code to nodeMCU esp8266

### Setting up the WebApp

The web app is build on the React.js library. The web app consist of a Node js server collecting the information recieved on Azure IotHub and sents it to client web app which is built on react js library which then plots the values on the graphs made using recharts. The communication between the Nodejs server and the webapp is made with the help of socket.io library and the Nodejs server recieves the infromation from Iothub with the help of @azure/event-hub library. User authentication is made using Google Firebase.

#### Server

* Download the file on the path `Water-Pipeline-Distribution-Network-Monitoring-System/React-app/server/`
* Open the folder in your IDE
* Open `server.js`and input the Iot hub connection string and consumer group as suggested on the [microsoft documentation](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-live-data-visualization-in-web-apps)
* Open terminal and type `npm install`
* Once the installation is complete, type in `npm start` in terminal.
* You see the message `server is running` in your browser.

#### Webapp

* Download the file on the path `Water-Pipeline-Distribution-Network-Monitoring-System/React-app/client/`
* Open the folder in your IDE
* Open the `fire.js` in the path `Water-Pipeline-Distribution-Network-Monitoring-System/React-app/client/src/config/` and input the api key given by google firebase
* Open terminal and type `npm install`
* Once the installation is complete, type in `npm start` in terminal.
* You should be able to login into the webapp and see the graph been updated in real-time if the arduino is senting the values.

![2020-07-02-20-58-46](https://user-images.githubusercontent.com/48409905/87225739-b95ea400-c3ac-11ea-8cdd-20a539a3faaf.gif)

For more details please refer the README.md files in each folder

