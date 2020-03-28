
// Importing libraries

import React from 'react';
import io from 'socket.io-client';
import { useState, useEffect } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer
} from 'recharts';
import './chart.css'

//Connecting to server at port 5000

const socket = io('https://rebootserver2020.herokuapp.com/');

var Pressure = 0;
var FlowRate = 0;
var Ph = 0;
var color1;
var color2;
var color3;

function colorChange() {
  if (Pressure < 1.4) {
    color1 = {
      color: 'red'
    }
  }
  else {
    color1 = {
      color: 'rgb(110, 110, 110'
    }
  }
  if (Ph < 7|| Ph>7.5) {
    color3 = {
      color: 'red'
    }
  }
  else {
    color3 = {
      color: 'rgb(110, 110, 110'
    }
  }
  if (FlowRate < 24) {
    color2 = {
      color: 'red'
    }
  }
  else {
    color2 = {
      color: 'rgb(110, 110, 110'
    }

  }
}


function Chart() {



  const [dataReact, setData] = useState([]);

  useEffect(() => {
    socket.on('data1', res => {
      setData(currentData => [...currentData, res]);
      Pressure = res.Pressure;
      FlowRate = res.Flowrate;
      Ph = res.Ph;
      colorChange();
     
    });
  }, []);
  if (dataReact.length>10)
  {
    dataReact.shift();
    
  }
  console.log(dataReact);

  // Returning the line chart

  return (
    <div className="chart">
      <div className="container">
        <h2>Dashboard</h2>
        <div className="row expect">
          <div className="col-md-3">
            <div className="card">
              <h4>Devices Connected</h4>
              <i className="fas fa-wifi fa-2x"></i>
              <h5>1</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <h4 style={color1}>Pressure</h4>
              <i className="fas fa-tachometer-alt fa-2x"></i>
              <h5>{Pressure}</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <h4 style={color2}>FlowRate</h4>
              <i className="fas fa-water fa-2x"></i>
              <h5>{FlowRate}</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <h4 style={color3}>Ph</h4>
              <i className="fas fa-vial fa-2x"></i>
              <h5>{Ph}</h5>
            </div>
          </div>
        </div>

        <h1>Pressure</h1>
        <div className="row">

        <ResponsiveContainer width="99%" aspect={3} >
        <AreaChart
            data={dataReact}
            
            className="areachart"
            
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="MessageDate" />
            <YAxis />
            <Tooltip />
            
            <Area type="monotone" dataKey="Pressure" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
          </ResponsiveContainer>
        </div>
        <h1>FlowRate</h1>
        <div className="row">


        <ResponsiveContainer width="99%" aspect={3} >
        <AreaChart
            data={dataReact}
            
            className="areachart"
           
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="MessageDate" />
            <YAxis />
            <Tooltip />
            
            <Area type="monotone" dataKey="Flowrate" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
          </ResponsiveContainer>

        </div>
        <h1>Ph Value</h1>
        <div className="row">


        <ResponsiveContainer width="99%" aspect={3} >
        <AreaChart
            data={dataReact}
            
            className="areachart"
           
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="MessageDate" />
            <YAxis />
            <Tooltip />
            
            <Area type="monotone" dataKey="Ph" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
          </ResponsiveContainer>
        </div>


      </div>
      <footer><h6>Developed by DataPirates</h6></footer>
    </div>
  );
}

export default Chart;
