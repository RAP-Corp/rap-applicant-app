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
    return (
      <div className="container">
      <div className="inputs">
        <div className="row">
          <div className="col-lg-2 mr-3">
          <label className="inputLabel">First Name:</label>
          <input
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
            className="inputBox"
            placeholder="First Name"
          />
          </div>
          <div className="col-lg-2 mr-3">
          <label className="inputLabel"> Last Name </label>
          <input
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
            className="inputBox"
            placeholder="Last Name"
          />
          </div>
        </div>
        <label className="inputLabel">Email:</label>
        <div className="row">
          <div className="col-md-12 mt-0">
          <input
            value={this.state.email}
            onChange={this.handleEmailChange}
            className="inputEmail"
            placeholder="Email"
          />
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 mr-3">
          <label className="inputLabel">Phone:</label>
          <input
            value={this.state.cellphone}
            onChange={this.handleCellphoneChange}
            className="inputBox"
            placeholder="Cellphone #"
          />
          </div>
          <div className="col-md-2 mr-3">
          <label className="inputLabel"> Date of Birth: </label>
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
          </div>
        </div>
        <label className="inputLabel">Address:</label>
        <div className="row">
          <div className="col-md-12 ml-0">
          <input
            value={this.state.address}
            onChange={this.handleAddressChange}
            className="inputStreet"
            placeholder="Street Address"
          />
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 mr-3">
          <label className="inputLabel">State:</label>
          <input
            /*value={this.state.cellphone}
            onChange={this.handleCellphoneChange}
            */
            className="inputBox"
            placeholder="Dropdown here"
          />
          </div>
          <div className="col-md-2 mr-3">
          <label className="inputLabel"> Zipcode: </label>
          <input
            /*value={this.state.cellphone}
            onChange={this.handleCellphoneChange}
            */
            className="inputBox"
            placeholder="Zipcode"
          />
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 mr-3">
          <label className="inputLabel">Education Level:</label>
          <input
            /*value={this.state.cellphone}
            onChange={this.handleCellphoneChange}
            */
            className="inputBox"
            placeholder="Dropdown here"
          />
          </div>
          <div className="col-md-2 mr-3">
          <label className="inputLabel"> Citizenship Status: </label>
          <input
            /*value={this.state.cellphone}
            onChange={this.handleCellphoneChange}
            */
            className="inputBox"
            placeholder="Dropdown here"
          />
          </div>
        </div>
        <label className="inputLabel">Additional Links:</label>
        <div className="row">
          <div className="col-md-12 ml-0">
          <input
            /*value={this.state.address}
            onChange={this.handleAddressChange} */
            className="inputLinks"
            placeholder="Put any additional links here"
          />
          </div>
        </div>
        <label className="inputLabel">Password</label>
        <div className="row">
          <div className="col-md-12 ml-0">
          <input
            value={this.state.password}
            onChange={this.handlePasswordChange}
            className="inputPassword"
            placeholder="Password"
            type="password"
          />
          </div>
        </div>
        <label className="inputLabel">Confirm Password</label>
        <div className="row">
          <div className="col-md-12 ml-0">
          <input
          /*
            value={this.state.password}
            onChange={this.handlePasswordChange}
          */
            className="inputPassword"
            placeholder="Confirm Password"
            type="password"
          />
          </div>
        </div>
        <label className="inputLabel">Upload Resume</label>
        <div className="row">
          <div className="col-md-12 ml-0">
          <input
          /*
            value={this.state.password}
            onChange={this.handlePasswordChange}
          */
            className="inputUpload"
            placeholder="Upload Resume"
          />
          </div>
        </div>
        </div>
        <button
          className="registerBtn"
          type='Submit'
          onClick={this.onSubmit}
        >Register</button>
        <Link to="/login">
          <span className="goToLogin">Already have an account?</span>
        </Link>
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
