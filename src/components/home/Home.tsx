import React from "react";
import Banner from "./Banner";
import About from "./About";
import Introduce from "./Introduce";
import FavSkills from "./FavSkills";
import Statatics from "./Statatics";
import AboutUs from "./AboutUs";
import CFA from "./CFA";
import Contact from "./Contact";

const Home: React.FC = () => {
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
