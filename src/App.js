import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
import LogIn from "./Components/LogIn/LogIn";
import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/UseReducer";
import AdminSideBar from "./Components/AdminSideBar/AdminSideBar";
import UserSideBar from "./Components/UserSideBar/UserSideBar";
import MaAbout from "./Components/MaAbout/MaAbout";
import Blog from "./Components/Blog/Blog";
import SkillsMenu from "./Components/SkillsMenu/SkillsMenu";
import SkillsVideoList from "./Components/SkillVideoList/SkillVideoList";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import KidCorner from "./Components/KidCorner/KidCorner";
import Blog1 from "./Components/Blogger/Blog1/Blog1";
import Blog2 from "./Components/Blogger/Blog2/Blog2";
import Blog3 from "./Components/Blogger/Blog3/Blog3";
import Blog4 from "./Components/Blogger/Blog4/Blog4";
import Blog5 from "./Components/Blogger/Blog5/Blog5";
import Blog6 from "./Components/Blogger/Blog6/Blog6";
import Blog7 from "./Components/Blogger/Blog7/Blog7";
import Blog8 from "./Components/Blogger/Blog8/Blog8";
import Blog9 from "./Components/Blogger/Blog9/Blog9";
import AddSkill from "./Components/AddSkill/AddSkill";

export const UserContext = createContext();
/*
rafc
*/

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log("APP : " + state);
  return (
    <div>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navigation />
        <UserSideBar />
        <AdminSideBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/skills" element={<SkillsMenu />} />
          <Route path="/addSkill" element={<AddSkill />} />
          <Route path="/skills-video-list" element={<SkillsVideoList />} />
          <Route path="/aboutus" element={<MaAbout />} />
          <Route path="/kids" element={<KidCorner />} />
          <Route path="/video-play-skills/:id" element={<VideoPlayer />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog001" element={<Blog1 />} />
          <Route path="/blog002" element={<Blog2 />} />
          <Route path="/blog003" element={<Blog3 />} />
          <Route path="/blog004" element={<Blog4 />} />
          <Route path="/blog005" element={<Blog5 />} />
          <Route path="/blog006" element={<Blog6 />} />
          <Route path="/blog007" element={<Blog7 />} />
          <Route path="/blog008" element={<Blog8 />} />
          <Route path="/blog009" element={<Blog9 />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
