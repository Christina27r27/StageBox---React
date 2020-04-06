import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Header from './Components/HeaderComponent';
import Home from './Components/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import CarouselComponent from './Components/CarouselComponent';

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Header />
          <CarouselComponent />
          <Switch>
          <Route exact path="/">
              <Home />       
          </Route>
          <Route path="/aboutus">
            <div style={{color: '#fff'}}>About Us</div>
            </Route>
          <Route path="/contactus">
            <div style={{color: '#fff'}}>Contact Us</div>
          </Route>
          </Switch>
        </div>
      </Router>
  );
  
  }
}

export default App;
