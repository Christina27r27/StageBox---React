import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input,Col} from 'reactstrap';
import {NavLink} from 'reactstrap';
import Header from './HeaderComponent';


class Contact extends Component{

    constructor(props){
        super(props);

        
        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            company:'',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }





    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
                
                <div className="container wholeForm">
                    <div className="row row-content">
                        <div className="col-xm mx-auto  text-white ">
                            <h2 className="contactTitle">CONTACT US</h2>
                        <hr />
                        </div>
                        <div className=" col-xm mr-2">
                            <a href="https://www.instagram.com/stageboxdesign/">
                                <i className="fa fa-instagram text-white insta" />
                            </a>
                        </div>
                        <div className=" col-xm">
                            <a href="https://www.pinterest.com/stagebox8/">
                                <i className="fa fa-pinterest text-white insta" />
                            </a>
                        </div>
                        <div className="col-md-10 offset -1 text-white">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="firstName" md={5}>Name</Label>
                                    <Col md={5}>
                                        <Input type="text" id="firstName" name="firstName"
                                            placeholder="First Name"
                                            value={this.state.firstName}
                                            onChange={this.handleInputChange} />
                                    </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="email" md={5}>EMAIL</Label>
                                        <Col md={5}>
                                            <Input type="text" id="lastName" name="lastName"
                                                placeholder="Email"
                                                value={this.state.lastName}
                                                onChange={this.handleInputChange} />
                                        </Col>                        
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="phoneNum" md={5}>PHONE</Label>
                                        <Col md={5}>
                                            <Input type="tel" id="phoneNum" name="phoneNum"
                                                placeholder="Phone number"
                                                value={this.state.phoneNum}
                                                onChange={this.handleInputChange} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="address" md={5}>ADDRESS</Label>
                                        <Col md={5}>
                                            <Input type="address" id="email" name="email"
                                                placeholder="Address"
                                                value={this.state.email}
                                                onChange={this.handleInputChange} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={5}>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox"
                                                        name="agree"
                                                        checked={this.state.agree}
                                                        onChange={this.handleInputChange} /> {' '}
                                                    <strong className="text-white">May we contact you?</strong>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={5}className="offset-5" >
                                            <Button type="submit" color="danger">
                                                Submit 
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col xl={12}  className="offset-5 " >
                                            <h6>stagebox8@gmail.com | Tel: 949-689-9910</h6>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="col ml-3">
                        <iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=33.7152423,-117.7588806&amp;q=102%20lakepines%2C%20irvine%2C%20ca%2C92620+(STAGEBOX)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        <a href="https://www.maps.ie/coordinates.html">latitude longitude finder</a></iframe>
                    </div><br />   
            </React.Fragment>
           
               
                
            
        )
    }
}

export default Contact;