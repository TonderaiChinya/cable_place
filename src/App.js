import React from "react";
import  Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDom from "react-dom";
import './App.css';
import Home from './components/pages/Home';
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import Automotive_cable_services from "./components/pages/Automotive_cable_services";
import Balustrade_services from "./components/pages/Balustrade_services";
import Window_mechanism from "./components/pages/Window_mechanism";
import Motor_service from "./components/pages/Motor_service";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/services'  component={Services}/>
          <Route path='/products'  component={Products}/>
          <Route path='/contact' exact component={Contact}/>
          <Route path='/automotive_cable_services' exact component={Automotive_cable_services}/>
          <Route path='/balustrade_wire_rope_services' exact component={Balustrade_services}/>
          <Route path='/window_mechanism_repair' exact component={Window_mechanism}/>
          <Route path='/motor_vehicle_repair_and_servicing' exact component={Motor_service}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
