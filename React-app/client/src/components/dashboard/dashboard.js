
// Importing libraries

import React from 'react';
import Menu from '../menu/menu'
import { BrowserRouter as Router, Switch,  Route,} from "react-router-dom";
import Login from '../login/login'
import Chart from '../chart/chart'
import Header from '../header/header'
import './dashboard.css'


function Dashboard() {




    // Returning the line chart


    return( <div className="Dashboard">
        <Router>
        <Menu />
        <div className="rightcontent" >
            <Header />
         <Switch>
          <Route path="/" exact>
            <Chart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        </div>
    </Router>
       
    </div>
    );
}

export default Dashboard;
