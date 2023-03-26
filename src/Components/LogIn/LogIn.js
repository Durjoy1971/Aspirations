import React from 'react';
import './LogIn.css';

const LogIn = () => {
  return (
    <section className="section-Login">
      <div className="form-box">
        <div className="form-value">
          <form action="">
            <h2 className="h2-Login">Login</h2>
            <div className="inputbox">            
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="inputbox">
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="forget">

            </div>
            <button>Log in</button>
            <div className="register">
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
