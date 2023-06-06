import React, { useState, useContext, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { UserContext } from "../../App";
import "./AdminLogin.css";

const AdminLogin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Admin | Aspiration";
    return () => {
      document.title = "Admin | Aspiration";
    };
  }, []);

  const { state, dispatch } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  console.log(state);

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        if (email === "durjoybarua1971@gmail.com") {
          alert("Sign In Successfull");
          document.querySelector(".admin_username_data").value = "";
          document.querySelector(".admin_username_password").value = "";
          // window.location.href = "/home";
          // From Here
          // dispatch({ type: "USER", payload: true });
          dispatch({ type: "LOGIN", payload: {userName:userCredential.user.displayName, email:userCredential.user.email }});
          navigate("/home");
        } else {
          document.querySelector(".admin_username_data").value = "";
          document.querySelector(".admin_username_password").value = "";
          signOut(auth).then(() => {
            // dispatch({ type: "USER", payload: false });
            dispatch({ type: "LOGOUT", payload: "" });
            alert("Error Found");
          });
        }
      })
      .catch((error) => {
        document.querySelector(".admin_username_data").value = "";
        document.querySelector(".admin_username_password").value = "";
        alert("Invalid email or password.");
        console.log(error);
      });
  };

  return (
    <div className="admin-body">
      <div className="container-admin">
        <div className="admin-login-box">
          <h2 className="admin-h2">Admin Login</h2>

          <form action="" onSubmit={login}>
            <div className="input-box-admin">
              <input
                className="admin_username_data"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>

            <div className="input-box-admin">
              <input
                className="admin_username_password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Password</label>
              {[...Array(50)].map((_, index) => (
                <span
                  key={index}
                  className="admin-span"
                  style={{ "--i": index }}
                >
                  {" "}
                </span>
              ))}
            </div>

            <button type="submit" className="btn-admin">
              {" "}
              Login{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
