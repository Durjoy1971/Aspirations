import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import LikeSection from "./Components/LikeSection/LikeSection";
import LogIn from "./Components/LogIn/LogIn";
import Navigation from "./Components/Navigation/Navigation";
import ProgramJoin from "./Components/ProgramJoin/Program";
import Register from "./Components/Register/Register";

/*
rafc
*/

function App() {
  return (
    <div className="emne">
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
      </Routes>
      <ProgramJoin/>
      <LikeSection/>
      <Footer />
    </div>
  );
}

export default App;
