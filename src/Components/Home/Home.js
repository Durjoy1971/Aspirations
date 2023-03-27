import React from 'react'
import AdUnderLarge from '../AdUnderLarge/AdUnderLarge';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import CourseDownload from '../CourseDownload/CourseDownload';
import ProgramJoin from '../ProgramJoin/ProgramJoin';

import "./Home.css";
const Home = () => {
  return ( 
    <div>
        <Banner/>
        <CourseDownload/>
        <AdUnderLarge/>
        <ProgramJoin/>
        <Contact/>

    </div>
 );
}

export default Home;
