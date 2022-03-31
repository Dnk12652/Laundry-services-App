//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import Headercomponent from './commanComponent/Headercomponent';
//import  FooterComponent from './commanComponent/FooterComponent';
import Register from "./register/Register";
import Login from "./login/Login"
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Createorder from './orders/Createorder';
import Orderlists from './orders/Orderlists';
import OrderPage from '../src/pastordercomponent/Pastorders';
import OrderConfirm from "./commanComponent//OrderConfirm"
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (

    < BrowserRouter>
    <div>
    <Switch>
      <Route  path="/" exact component={Login}/>
      <Route path="/register"   exact><Register/></Route>
      <PrivateRoute path='/orders' exact  ><Createorder/></PrivateRoute>
      <PrivateRoute path='/orderlists' exact  ><Orderlists/></PrivateRoute>
      <PrivateRoute path='/orderPage' exact  ><OrderPage/></PrivateRoute>
      <PrivateRoute path='/orderc' exact  ><OrderConfirm/></PrivateRoute>
       </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
