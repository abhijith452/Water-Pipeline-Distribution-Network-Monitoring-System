

import React from 'react';


import { Chart } from 'react-charts'
let temArrayT = [];
let temapArrayH = [];
let time = [];
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
        const url="https://india.table.core.windows.net/newt?sv=2019-02-02&ss=bfqt&srt=sco&sp=rwdlacup&se=2020-03-05T20:26:33Z&st=2020-03-05T12:26:33Z&spr=https&sig=Xkv1fDaNTfCz5iIRvQknXYNYETEsZpJP7XrJuXkwByg%3D";
        let response = await fetch(url,requestOptions);
        let datafet= await response.json();
       
      
datafet.value.forEach(function(dataVal){

temArrayT.push(dataVal['Ph']);
temapArrayH.push(dataVal['Pressure']);
time.push(dataVal['RowTime']);

})
    };
    Datafetch();
    

    const data = React.useMemo(
        () => [
          {
            label: temArrayT,
            data: temapArrayH,
          },
          
        ],
        []
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










