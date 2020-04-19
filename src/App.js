import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Header from './Components/HeaderComponent';
import Home from './Components/Home'
import About from './Components/AboutComponent';
import Contact from './Components/ContactComponent';
import {BrowserRouter , Route, Switch, Redirect} from 'react-router-dom';
import './App.css';



class App extends Component {
  
  render(){
    return (
      
         <div>
            <Header />
              <Switch>
                  <Route path ="/home" component={Home} /> 
                  <Route path="/aboutus"  component={About}/>
                  <Route path="/contactus" component={Contact}/>
                  <Redirect to='/home' />
              </Switch>
        </div> 
          
      
          
      
     
    
     
         
        
          
          
      
    
    
      
      
  );
  
  }
}

export default App;
