

import React from 'react';

function Dashboard(){
    return (
        <div className="container">
        
        <div className="row">
          <div className="col-md-4">
          <div className="card" style={{width: 18+'rem'}}>
               <div className="card-body">
                   <h5 className="card-title">Device Connection</h5>
                   <h1>10</h1>
                   <canvas id="canvasbar"></canvas>
                      </div>
                </div>
          </div>
          <div className="col-md-4">
          <div className="card" style={{width: 18+'rem'}}>
               <div className="card-body">
                   <h5 className="card-title">Flow Rate</h5>
                       <h1>9</h1>
                       <canvas id="canvasgauge"></canvas>
                      </div>
                </div>
          </div>
          <div className="col-md-4">
          <div className="card" style={{width: 18+'rem'}}>
               <div className="card-body">
                   <h5 className="card-title">PH Value</h5>
                   <h1>8</h1>
                   <canvas id="canvasline"></canvas>
                      </div>
                </div>
          </div>

        </div>
        
        <div className="row">
          <div className="col-md-12">
          <canvas id="canvasbline"></canvas>


          </div>
          </div>

        </div>
          
    );
};
export default Dashboard;










