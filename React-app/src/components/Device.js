

import React from 'react';

function Device(){
    return (
        <div className="container">
        
        <div className="row">
          <div className="col-md-4">
          <div class="card" style={{width: 18+'rem'}}>
               <div class="card-body">
                   <h5 class="card-title">Pressure</h5>
                   <h1>10</h1>
                      </div>
                </div>
          </div>
          <div className="col-md-4">
          <div class="card" style={{width: 18+'rem'}}>
               <div class="card-body">
                   <h5 class="card-title">Flow Rate</h5>
                       <h1>9</h1>
                      </div>
                </div>
          </div>
          <div className="col-md-4">
          <div class="card" style={{width: 18+'rem'}}>
               <div class="card-body">
                   <h5 class="card-title">PH Value</h5>
                   <h1>8</h1>
                      </div>
                </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" style={{height:50}}>
          <canvas id="myChart"></canvas>
          </div>
        </div>
      </div>
          
    );
};
export default Device;










