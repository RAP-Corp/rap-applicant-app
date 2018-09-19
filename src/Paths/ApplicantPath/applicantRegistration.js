import React, {Component} from 'react';
import './registration_page.css';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { registrationWatcher } from '../../actions/actionCreators';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class applicantRegistration extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      password: '',
      cellphone: '',
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      dob: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCellphoneChange = this.handleCellphoneChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
  }
  handleLastNameChange(event) {
    this.setState({lastName: event.target.value});
  }
  handleAddressChange(event) {
    this.setState({address: event.target.value});
  }
  handleCellphoneChange(event) {
    this.setState({cellphone: event.target.value});
  }
  handleDateChange(date) {
    debugger;
    this.setState({dob: date});
  }


  onSubmit = (e) => {
    e.preventDefault();
    this.props.registrationWatcher({
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      address: this.state.address,
      cellphone: this.state.cellphone,
      dob: this.state.dob,
      history: this.props.history
    });
  }

  render() {
    // let profileStatus = null;
    // if (this.props.profile) profileStatus = this.props.profile.profileStatus;
    // let loginError = null;
    // if (this.props.loginError) loginError = "Username or Password is wrong";
    return (
        <div className="login-page">
          <div className="inputs">
            <form onSubmit={this.onSubmit} >
            <div className="nameInputs">
              <label className="inputLabel"> Placeholder </label>
                <input
                  value={this.state.firstName}
                  onChange={this.handleFirstNameChange}
                  className="inputBox"
                  placeholder="First Name"
                />
              <label className="inputLabel"> Placeholder </label>
                <input
                  value={this.state.lastName}
                  onChange={this.handleLastNameChange}
                  className="inputBox"
                  placeholder="Last Name"
                />
            </div>
              <label className="inputLabel"> Placeholder </label>
              <input
                value={this.state.email}
                onChange={this.handleEmailChange}
                className="inputBox"
                placeholder="Email"
              />
              <label className="inputLabel"> Placeholder </label>
              <input
                value={this.state.cellphone}
                onChange={this.handleCellphoneChange}
                className="inputBox"
                placeholder="Cellphone #"
              />
              <label className="inputLabel"> Placeholder </label>
              <DatePicker
                className="inputBox"
                selected={this.state.dob}
                onChange={this.handleDateChange}
                showYearDropdown
                dateFormatCalendar="MMMM"
                scrollableYearDropdown
                yearDropdownItemNumber={50}
                maxDate={moment().subtract(18, "years")}
                dateFormat="DD MMM YYYY"
                placeholderText="Date of Birth"
              />
              <label className="inputLabel"> Placeholder </label>
              <input
                value={this.state.address}
                onChange={this.handleAddressChange}
                className="inputBox"
                placeholder="Address"
              />
              <label className="inputLabel"> Placeholder </label>
              <input
                value={this.state.password}
                onChange={this.handlePasswordChange}
                className="inputBox"
                placeholder="Password"
                type="password"
              />
              <button
                className="loginBtn"
                type='Submit'
                onClick={this.onSubmit}
              >Register</button>
              <Link to="/login">
                <span className="forgotLink">Already have an account?</span>
              </Link>
            </form>
            </div>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    registrationWatcher
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    profile: state.login.profile,
    loginError: state.login.loginError
  };
};

applicantRegistration.PropTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loginWatcher: PropTypes.func
}


export default connect(mapStateToProps, mapDispatchToProps)(applicantRegistration);
