import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import {NavLink, Link} from 'react-router-dom';



class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        console.log('toggled Nav')
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
        <React.Fragment>
            <Jumbotron fluid>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-lg-4 mx-auto">
                            <Link to="/home">
                                <h1 className="mainTitle text-white">StageBox</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Navbar dark sticky="top" expand="sm">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    About us 
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </React.Fragment>
        )
    }
}

export default Header;