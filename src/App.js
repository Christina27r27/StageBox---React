import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Header from './Components/HeaderComponent';
import Home from './Components/Home'
import About from './Components/AboutComponent';
import Contact from './Components/ContactComponent';
import {HashRouter, Route, Switch,Redirect} from 'react-router-dom';
import './App.css';
import CarouselComponent from './Components/CarouselComponent';


class App extends Component {
  render(){
    return (
      <HashRouter>
       
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/aboutus" component={About}/>
            
          </div>
      
      </HashRouter>
         
        
          
          
      
    
    
      
      
  );
  
  }
}

export default App;
