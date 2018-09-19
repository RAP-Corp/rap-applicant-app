import React, {Component} from 'react';
import './login_page.css';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { loginWatcher } from '../actions/actionCreators';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {value: '', email: '', password: ''};
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.loginWatcher({
      email: this.state.email,
      password: this.state.password,
      history: this.props.history
    });
  }

  render() {
    // let profileStatus = null;
    // if (this.props.profile) profileStatus = this.props.profile.profileStatus;
    let loginError = null;
    if (this.props.loginError) loginError = "Username or Password is wrong";
    return (
        <div className="login-page">
          <form onSubmit={this.onSubmit} className="inputs">
            <input
              value={this.state.email}
              onChange={this.handleEmailChange}
              className="inputBox"
              placeholder="Email"
            />
            <input
              value={this.state.password}
              onChange={this.handlePasswordChange}
              className="inputBox"
              placeholder="Password"
              type="password"
            />
            <p className="error-text">{loginError}</p>
            <button
              className="loginBtn"
              type='Submit'
              onClick={this.onSubmit}
            >Login</button>
            <Link to="/">
              <span className="forgotLink">Forgot your Username or Password?</span>
            </Link>
            <Link to="/registration">
              <span className="forgotLink">Register</span>
            </Link>
          </form>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginWatcher
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    profile: state.login.profile,
    loginError: state.login.loginError
  };
};

Login.PropTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loginWatcher: PropTypes.func
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
