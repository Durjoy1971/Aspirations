import React, { useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";
import { UserContext } from "../../App";

const LogIn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Login | Aspiration";
    return () => {
      document.title = "Login | Aspiration";
    };
  }, []);

  const { state, dispatch } = useContext(UserContext);

  console.log(state);

  // It is used for the transition works
  useEffect(() => {
    const sign_in_btn = document.querySelector("#login-sign-in-btn");
    const sign_up_btn = document.querySelector("#login-sign-up-btn");
    const container = document.querySelector(".login-container");
    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("login-sign-up-mode");
    });
    sign_up_btn.addEventListener("click", () => {
      container.classList.add("login-sign-up-mode");
    });
  }, []);

  // Variable

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  // It handle Sign In Works
  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential.user.emailVerified) {
          //console.log("Logged in successfully");
          alert("Sign In Successfull");
          document.querySelector(".login_username_data").value = "";
          document.querySelector(".login_username_password").value = "";
          dispatch({
            type: "LOGIN",
            payload: {
              userName: userCredential.user.displayName,
              email: userCredential.user.email,
            },
          });
          //console.log(userCredential.user.displayName);
          navigate("/home");
        } else {
          alert("Please verify your email before logging in.");
        }
      })
      .catch((error) => {
        alert("Invalid email or password.");
        console.log(error);
      });
  };

  // It handles sign up works

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: username,
        }).catch((error) => {
          console.log(error);
        });

        sendEmailVerification(user)
          .then(() => {
            console.log("Verification email sent successfully");
            alert("Account Created Successfully");
            document.querySelector(".logup_username_name").value = "";
            document.querySelector(".logup_username_data").value = "";
            document.querySelector(".logup_username_password").value = "";
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        let error_message;
        if (error.code === "auth/weak-password") {
          error_message = "Password should be at least 6 characters long.";
        } else if (error.code === "auth/email-already-in-use") {
          error_message = "Email address is already in use.";
        } else {
          error_message = "An error occurred. Please try again later.";
        }
        alert(error_message);
        console.log(error);
      });
  };

  // All html works done here

  return (
    <div className="login-container">
      <div className="login-forms-container">
        <div className="login-signin-signup">
          {/* Sign In Form */}
          <form
            action="#"
            onSubmit={login}
            className="login-sign-in-form"
            id="login-form"
          >
            {/* This is main form where input will be taken */}
            <h2 className="login-title">Sign in</h2>
            <div className="login-input-field">
              <i className="fas fa-user"></i>
              {/* Here Email will be taken */}
              <input
                className="login_username_data"
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-input-field">
              <i className="fas fa-lock"></i>
              {/* Here Password will be taken */}
              <input
                className="login_username_password"
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* Here Button Is Used */}
            <input type="submit" value="Login" className="login-btn solid" />
          </form>

          {/* Sign Up */}
          <form
            action="#"
            onSubmit={signup}
            className="login-sign-up-form"
            id="logout-form"
          >
            <h2 className="login-title">Create Account</h2>

            <div className="login-input-field">
              <i className="fas fa-user"></i>
              <input
                className="logup_username_name"
                type="text"
                placeholder="Username"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="login-input-field">
              <i className="fas fa-envelope"></i>
              <input
                className="logup_username_data"
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-input-field">
              <i className="fas fa-lock"></i>
              <input
                className="logup_username_password"
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input type="submit" className="login-btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="login-panels-container">
        <div className="login-panel login-left-panel">
          <div className="login-content">
            <h3>New here ?</h3>
            <p>
              Click the sign-up button to create your account and explore our
              website.
            </p>
            <button
              className="login-btn login-transparent"
              id="login-sign-up-btn"
            >
              Sign up
            </button>
          </div>
          <img
            src="https://raw.githubusercontent.com/Durjoy1971/image-storing-for-project/d487a194e9fa133f62e06ef44bf1644ddfa68505/log.svg?token=AVZYKT6SIQWXOK5TLLQLHGTEJCVI2"
            className="login-image"
            alt=""
          />
        </div>
        <div className="login-panel login-right-panel">
          <div className="login-content">
            <h3>One of us ?</h3>
            <p>Click the sign-in button to log-in our website.</p>
            <button
              className="login-btn login-transparent"
              id="login-sign-in-btn"
            >
              Sign in
            </button>
          </div>
          <img
            src="https://raw.githubusercontent.com/Durjoy1971/image-storing-for-project/d487a194e9fa133f62e06ef44bf1644ddfa68505/register.svg?token=AVZYKT4DAXBPGSTRKJEUCBDEJCVG4"
            className="login-image"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
