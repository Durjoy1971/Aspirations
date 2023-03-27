import React from 'react'
import AdUnderLarge from '../AdUnderLarge/AdUnderLarge';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import CourseDownload from '../CourseDownload/CourseDownload';

import "./Home.css";
const Home = () => {
  return ( 
    <div>
        <Banner/>
        <AdUnderLarge/>
        <CourseDownload/>
        <Contact/>
    </div>
 );
}

export default Home;
