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
    this.state = {value: '', username: '', password: ''};
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUserChange(event) {
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.loginWatcher({
      username: this.state.username,
      password: this.state.password
    });
  }

  render() {
    let profileStatus = null;
    if (this.props.profile) profileStatus = this.props.profile.profileStatus;
    return (
        <div className="login-page">
          <div className="inputs">
            <input
              value={this.state.username}
              onChange={this.handleUserChange}
              className="inputBox"
              placeholder="Username"
            />
            <input
              value={this.state.password}
              onChange={this.handlePasswordChange}
              className="inputBox"
              placeholder="Password"
            />
            <button
              className="loginBtn"
              type='Submit'
              onClick={this.onSubmit}
            >Login</button>
            <Link to="">
              <span className="forgotLink">Forgot your Username or Password?</span>
            </Link>
          </div>
          {profileStatus}
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
    profile: state.login.profile
  };
};

Login.PropTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loginWatcher: PropTypes.func
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
