
// Importing libraries

import React from 'react';
import './App.css';
import io from 'socket.io-client';
import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';;

//Connecting to server at port 5000

const socket = io('http://localhost:5000');


function App() {

//Storing the data being sent from the nodejs server to dataReact with the help of useStateand useEffect hooks

  const [dataReact, setData] = useState([]);

  useEffect(() => {
      socket.on('data1', res => {
      setData(currentData => [...currentData, res]);
      });
  }, []);


// Returning the line chart

  return (
    <div>
      <h1>Real Time Raspberry Pie Data</h1>
      <LineChart width={500} height={300} data={dataReact}>
        <XAxis dataKey="MessageDate" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="Temperature" stroke="#8884d8" />
        <Line type="monotone" dataKey="Humidity" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
}

export default App;
