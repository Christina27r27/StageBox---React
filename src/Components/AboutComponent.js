import React, {Component} from 'react';
import { Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './HeaderComponent';
import { FadeTransform } from 'react-animation-components';



class About extends Component {
    render(){
        return(
            <React.Fragment>
               
                <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <div className="container">
                    <div className="row">
                        <div class="col-sm-12 aboutTitle">
                            <h1>ABOUT US</h1>
                        </div> 
                        <div className="col-lg-12 mt-2 mb-5 aboutBody">
                            <p>We offer home staging and interior design services for new construction and remodels of homes,condos,apartments,office and commercial
                            spaces to home builders,realtors, and property management firms in California and neighboring States.</p>
                            
                            <p>Using proven design principles and techniques for each project, we're ableto create a plan that establishes
                            proper flow and visual balance with attention to detail that transform empty houses into appealing homes</p>
                        </div> 
                    </div>                 
                </div> 
                </FadeTransform>
                <div className="container offset-2">
                    <div className="row"> 
                        <div className=" col-xm   homestaging">
                            <div className= "staging text-white">
                                <span className="stagingTitle">STAGING</span>
                                <div><i className=" fa fa-home homeicon" /></div>
                                <p>With each staging projectbeing specific to the home StageBox tailors
                                    the design of each staging to enhance the architectural style of the home - putting its best
                                    features on display. A successful staging makes the difference between a house and a ome.
                                </p>
                            </div>
                        </div>
                        <div className="col-xm  truck">
                            <div className= "furniture text-white">
                                <span className="furnitureTitle">INSTALLS</span>
                                <div><i className=" fa fa-truck homeicon" /></div>
                                <p>With each staging projectbeing specific to the home StageBox tailors
                                    the design of each staging to enhance the architectural style of the home - putting its best
                                    features on display. A successful staging makes the difference between a house and a ome.
                                </p>           
                            </div>
                        </div>
                        <div className="col-xm  design">
                            <div className= "designStudio text-white">
                                <span className="designTitle">STUDIO</span>
                                <div><i className=" fa fa-pencil homeicon" /></div>
                                <p>StageBox assits in all aspects of a project, we'll transform your house
                                    into a functional beautiful space with furniture, fabrics, accessories and provide with custom pieces
                                    tailor made for your living space.
                                </p>           
                            </div>
                        </div>
                        <div className="col-xm   model">
                            <div className= "modelHome text-white">
                                <span className="modelTitle">SERVICES</span>
                                <div><i className=" fa fa-comments-o homeicon" /></div>
                                <p>We provide builders with post model home services such as closeouts, furniture, and accessory
                                    replacements in a timely matter.
                                </p>           
                            </div>
                        </div>
                    </div>
                </div>     
        </React.Fragment>
        );
    }
}


export default About;