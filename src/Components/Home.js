import React from 'react'
import CarouselComponent from './CarouselComponent'
import Header from './HeaderComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';


const Home = () => {
    return (
          <div>
              <Header />
              <CarouselComponent />
          </div>
    )
}

export default Home;