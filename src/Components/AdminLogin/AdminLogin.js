import React from "react";
import "./AdminLogin.css";

const AdminLogin = () => {
  return (
    <div className="admin-body">
      <div className="container-admin">
        <div className="admin-login-box">
          <h2 className="admin-h2">Admin Login</h2>

          <form action="">
            <div className="input-box-admin">
              <input type="email" required />
              <label>Email</label>
            </div>
            
            <div className="input-box-admin">
              <input type="password" required />
              <label>Password</label>
              {[...Array(50)].map((_, index) => (
              <span key={index} className="admin-span" style={{ "--i": index }}>
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
