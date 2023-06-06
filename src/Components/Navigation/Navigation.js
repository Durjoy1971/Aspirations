import React, { useEffect, useState, useContext } from "react";
import { auth } from "../../firebase";
import "./Navigation.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { UserContext } from "../../App";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { searchYoutube } from "../../YoutubeAPI";

// Main JS Function
const Navigation = () => {
  const { state, dispatch } = useContext(UserContext);
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();
  // console.log("Navi : " + state);

  // Log out
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, [authUser]);

  // For Reload
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.emailVerified) {
          // Check if user is signed in and email is verified
          dispatch({ type: "LOGIN", payload: user.displayName });
          dispatch({
            type: "LOGIN",
            payload: { userName: user.displayName, email: user.email },
          });
        } else {
          // User signed up but email is not verified
          dispatch({ type: "LOGOUT", payload: "" });
        }
      } else {
        dispatch({ type: "LOGOUT", payload: "" });
      }
    });
    return () => {
      listen();
    };
  }, [dispatch]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT", payload: "" });
        alert("Log out successful");
        console.log("sign out successful");
        navigate("/home");
      })
      .catch((error) => console.log(error));
  };

  // For Fetching Videos
  const handleViewCoursesClick = async (event, query) => {
    event.preventDefault();
    if (state.isLoggedIn === true) {
      const response = await searchYoutube(query);
      navigate("/skills-video-list", { state: { videos: response } });
    } else {
      navigate("/login");
    }
  };

  // For Navbar transition
  useEffect(() => {
    const header = document.querySelector("[data-header]");
    const goTopBtn = document.querySelector("[data-go-top]");

    function handleScroll() {
      window.scrollY >= 20
        ? header.classList.add("active")
        : header.classList.remove("active");

      window.scrollY >= 800
        ? goTopBtn.classList.add("active")
        : goTopBtn.classList.remove("active");
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const RenderMenu = () => {
    if (state != null && state.isLoggedIn) {
      return (
        <>
          <Navbar.Brand as={Link} to="/home">
            <img
              className="image_nav"
              src="https://i.ibb.co/3RPhwRx/logo003.png"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="nav-point durjoy" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-point durjoy" as={Link} to="/skills">
                Skills
              </Nav.Link>
              <Nav.Link className="nav-point durjoy" as={Link} to="/kids">
                Kid's Corner
              </Nav.Link>
              <Nav.Link className="nav-point durjoy" as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link className="nav-point durjoy" onClick={(e) => handleViewCoursesClick(e, "motivation madness")}>
                Life and Teachings
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link
                className="nav-point durjoy"
                id="hide-log-out-button"
                onClick={handleSignOut}
              >
                LogOut
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </>
      );
    } else {
      return (
        <>
          <Navbar.Brand href="/home">
            <img
              className="image_nav"
              src="https://i.ibb.co/3RPhwRx/logo003.png"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="nav-point durjoy" href="/home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-point durjoy" as={Link} to={state.isLoggedIn ? '/skills' : '/login'}>
                Skills
              </Nav.Link>
              <Nav.Link className="nav-point durjoy" as={Link} to={state.isLoggedIn ? '/kid' : '/login'}>
                Kid's Corner
              </Nav.Link>
              <Nav.Link className="nav-point durjoy" href="/blog">
                Blog
              </Nav.Link>
              <Nav.Link className="nav-point durjoy" onClick={(e) => handleViewCoursesClick(e, "motivation madness")}>
                Life and Teachings
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link
                className="nav-point durjoy"
                href="/logIn"
                id="hide-log-in-button"
              >
                Log In
              </Nav.Link>
              <Nav.Link
                className="nav-point durjoy"
                href="/AdminLogin"
                id="hide-admin-button"
              >
                Admin
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </>
      );
    }
  };

  return (
    <div>
      <Navbar
        className="navbar"
        collapseOnSelect
        expand="xl"
        variant="dark"
        data-header
      >
        <Container>
          <RenderMenu />
        </Container>
      </Navbar>
      <a href="#top" className="go-top" data-go-top>
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </div>
  );
};

export default Navigation;
