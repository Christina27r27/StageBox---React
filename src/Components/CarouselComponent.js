import React from 'react';
import ReactDOM from 'react-dom';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';




class MyCarousel extends React.Component {
  constructor() {
    super()
    this.state = { value: 0 };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    return (
    <div>
        <Carousel
              autoPlay={2000}
              animationSpeed={1000}
              infinite
            >
              <img src='../wideLR.png' />
              <img src='../kitchen.png' />
              <img src='../smallLivingRoom.jpg' />
              
             
        </Carousel>
    </div>
    );
  }
}

export default MyCarousel;