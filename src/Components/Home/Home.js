import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import CFA from "../CFA/CFA";
import Introduce from "../Introduce/Introduce";
import FavSkills from "../FavSkills/FavSkills";
import Statatics from "../Statatics/Statatics";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Home | Aspiration';
    return () => {
      document.title = 'Home | Aspiration';
    };
  }, []);
  return (
    <div>
      <Banner />
      <About />
      <Introduce />
      <FavSkills />
      <Statatics />
      <AboutUs />
      <CFA />
      <Contact />
    </div>
  );
};

export default Home;
