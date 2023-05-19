import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import CFA from "../CFA/CFA";
import Introduce from "../Introduce/Introduce";
import FavSkills from "../FavSkills/FavSkills";
import Statatics from "../Statatics/Statatics";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Introduce />
      <FavSkills />
      <Statatics />
      <AboutUs/>
      <CFA />
      <Contact/>
    </div>
  );
};

export default Home;
