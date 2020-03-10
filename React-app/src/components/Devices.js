import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
var iotdata=[] ;
    var  pressure = [];
    var ph = [];

    
    async function Fetch()
    {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json;");
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      const url="https://india.table.core.windows.net/iotdata?sv=2019-02-02&ss=bfqt&srt=sco&sp=rwdlacup&se=2020-03-10T11:08:12Z&st=2020-03-10T03:08:12Z&spr=https&sig=LMQ5HEnqWV%2FNM%2FB4hp7QztAOCdeb9DacVk9PIs7BVZE%3D";
      let response = await fetch(url,requestOptions);
      let datafet = await response.json();
      datafet.value.forEach((dataVal)=>{
        pressure.push(dataVal['Pressure']);
        ph.push(dataVal['Ph']);
        
      })
    };
    Fetch();
    console.log(ph)
class Chart extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        
        labels: pressure,
        datasets:[
          {
            label:'Population',
            data: ph,
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              
            ]
          }
        ]
      ,
      
        labels: ph,
        datasets:[
          {
            label:'Population',
            data: pressure,
          
          }
        ]
      
      }
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
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
                

        </div>
                   
      </div>
        </div>
        </div>
        <Line 
          data={this.state.chartData}
          options={{
           
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
        </div>
    )
  }
}

export default Chart;