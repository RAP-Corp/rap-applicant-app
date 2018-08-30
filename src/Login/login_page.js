import React, {Component} from 'react';
import './login_page.css';
import { Link } from 'react-router-dom'

class Login extends Component {
  render() {
    return (
        <div className="login-page">
          <div className="inputs">
            <input className="inputBox" placeholder="Username"/>
            <input className="inputBox" placeholder="Password"/>
            <button className="loginBtn" type='Submit'>Login</button>
            <Link to="">
              <span className="forgotLink">Forgot your Username or Password</span>
            </Link>
          </div>
        </div>
    );
  }
}

export default Login;
