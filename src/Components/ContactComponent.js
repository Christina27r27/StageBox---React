import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input,Col} from 'reactstrap';

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
    }

   
}

export default Contact;