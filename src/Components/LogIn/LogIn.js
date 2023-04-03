import React from 'react';
import './LogIn.css';

const LogIn = () => {
  return (
    <section className="section-Login">
      <div className="form-box-Login">
        <div className="form-value">
          <form action="">
            <h2 className="h2-Login">Login</h2>
            <div className="inputbox-Login">            
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="inputbox-Login">
              <input type="password" required />
              <label>Password</label>
            </div>
            <button className="button-login">Log in</button>
            <div className="register-Login">
              <p>
                Don't have a account <a href="/register">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
