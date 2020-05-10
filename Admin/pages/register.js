import Layout2 from "../components/Layout2";
import Link from "next/link"
import { useState } from "react";
import {firebase, auth} from "../firebase"
import{ useRouter } from "next/router";
const Register = () => {
  const [name,setName]=useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function signUp=()=>{
  }
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
                      <label>Username</label>
                      <input
                        className="au-input au-input--full"
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        className="au-input au-input--full"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        className="au-input au-input--full"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="login-checkbox">
                      <label>
                        <input type="checkbox" name="aggree" />
                        Agree the terms and policy
                      </label>
                    </div>
                    <button
                      className="au-btn au-btn--block au-btn--green m-b-20"
                      type="submit"
                      onClick={onRegister}
                    >
                      register
                    </button>
                  </form>
                  <div className="register-link">
                    <p>
                      Already have account?
                      <Link href="../index">Sign In</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  )
};
export default Register;
