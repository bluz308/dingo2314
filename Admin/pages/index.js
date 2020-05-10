import Layout2 from "../components/Layout2";
import Link from "next/link";
import { useState } from "react";
import { auth } from "../firebase";
import router from "next/router";
const Login = () => {
  return (
    <Layout2>
      <div className="page-wrapper">
        <div className="page-content--bge5">
          <div className="container">
            <div className="login-wrap">
              <div className="login-content">
                <div className="login-logo">
                  <a href="#">
                    <img src="images/icon/logo.png" alt="CoolAdmin" />
                  </a>
                </div>
                <div className="login-form">
                  <form action method="post">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        className="au-input au-input--full"
                        type="email"
                        name="email"
                        placeholder="Email"
                       
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        className="au-input au-input--full"
                        type="password"
                        name="password"
                        placeholder="Password"
                     
                      />
                    </div>
                    <div className="login-checkbox">
                      <label>
                        <input type="checkbox" name="remember" />
                        Remember Me
                      </label>
                    </div>
                    <button
                      className="au-btn au-btn--block au-btn--green m-b-20"
          
                    >
                      sign in
                    </button>
                  </form>
                  <div className="register-link">
                    <p>
                      Don't you have account?
                      <Link href="../register">Sign Up Here</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  );
};
export default Login;
