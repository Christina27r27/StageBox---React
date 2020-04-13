import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Header from './Components/HeaderComponent';
import Home from './Components/Home'
import About from './Components/AboutComponent';
import Contact from './Components/ContactComponent';
import {BrowserRouter , Route,  Link} from 'react-router-dom';
import './App.css';



class App extends Component {
  
  render(){
    return (
      <React.Fragment>
          <BrowserRouter>
              <div className="content">
                <Route path ="/" component={Home} /> 
                <Route path="/aboutus"  component={About}/>
                <Route path="/contactus" component={Contact}/>
              </div> 
          </BrowserRouter>
      </React.Fragment>
          
      
     
    
     
         
        
          
          
      
    
    
      
      
  );
  
  }
}

export default App;
