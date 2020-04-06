import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function CarouselComponent(){
  return(
    <div className="container">
      <div classname="row row-content">
        <div className="col align-self-center">
          <div className="carousel-wrapper">
            <Carousel>
              <div className="carousel-item active">
                <img className="d-block w-100" src="../wideLR.png" />
              </div>
              <div clasName="carousel-item">
                <img  className="d-block w-100" src="../kitchen.png" />
              </div>
              <div clasName="carousel-item">
                <img  className="d-block w-100" src="../modernLivingRoom.png" />
              </div>
              <div clasName="carousel-item">
                <img  className="d-block w-100" src="../smallLivingRoom.jpg" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}