import React from 'react'
import AdUnderLarge from '../AdUnderLarge/AdUnderLarge';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';

import "./Home.css";
const Home = () => {
  return ( 
    <div>
        <Banner/>
        <AdUnderLarge/>
        <Contact/>
    </div>
 );
}

export default Home;
