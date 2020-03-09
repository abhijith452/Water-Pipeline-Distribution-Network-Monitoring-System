

import React from 'react';


import { Chart } from 'react-charts'
var temArrayT = [];
var temapArrayH = [];
var time = [];
var chart =[];
function Device(){
    async function Datafetch()
    {
     var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json;");
    myHeaders.append("Origin", "http://127.0.0.1:5500/");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
        const url="https://india.table.core.windows.net/iotdata?sv=2019-02-02&ss=bfqt&srt=sco&sp=rwdlacup&se=2020-03-09T12:20:40Z&st=2020-03-09T04:20:40Z&spr=https&sig=umQtxbs%2FQJCwCU1Vbg5qByv3zSnt5%2FEVdtR1fH9YvL8%3D";
        let response = await fetch(url,requestOptions);
        let datafet= await response.json();
        console.log(datafet);
datafet.value.forEach(
  function(dataVal){
  

if(dataVal['Pressure'] !== 1 || dataVal['Pressure'] !== 2 || dataVal['Ph'] !== 6 ||dataVal['Ph'] !== 7 )
{
  temArrayT.push(dataVal['Pressure']);
  temapArrayH.push(dataVal['Ph']);
  time.push(dataVal['RowKey']);
var chartpoint ={
  x : dataVal['Pressure'],
  y : dataVal['Ph']
}
chart.push(chartpoint);
  }
})

    };
  var tArr = chart.toString();
    Datafetch();
    console.log(chart);
    console.log(tArr);
    console.log(temapArrayH);
    console.log(temArrayT);
    const data = React.useMemo(
        () =>[  {
          label: 'Series 1',
          data:  tArr
        },
       
        ]
        
      )
     
      const axes = React.useMemo(
        () => [
          { primary: true, type: 'linear', position: 'bottom' },
          { type: 'linear', position: 'left' }
        ],
        []
      )
     
     
    return (
        <div className="container">
        <canvas id="myCh"></canvas>
        <div className="row">
          <div className="col-md-4">
          <div className="card" style={{width: 18+'rem'}}>
               <div className="card-body">
                   <h5 className="card-title">Device</h5>
                   <p className="card-title">Location : Palakad</p>
                   <p> Details</p>
                   <div style={{ width: '100%', height: '200px' }}>
          <Chart data={data} axes={axes} />
        </div>
          </div>
                     
        </div>
          </div>
          </div>
          </div>
          
          
    );
};
export default Device;










