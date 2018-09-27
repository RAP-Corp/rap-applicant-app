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
import { Dropdown } from 'react-simple-dropdown';

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
      additionalLinks: '',
      passwordConfirm: '',
      zipCode: '',
      citizenship: '',
      dob: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCellphoneChange = this.handleCellphoneChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
    this.handleAdditionalLinksChange = this.handleAdditionalLinksChange.bind(this);
    this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(this);
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
    this.setState({cellphone: event.target.value.replace(/\D/,'')});
  }
  handleZipCodeChange(event) {
    this.setState({zipCode: event.target.value.replace(/\D/,'')});
  }
  handleAdditionalLinksChange(event) {
    this.setState({additionalLinks: event.target.value});
  }
  handlePasswordConfirmChange(event) {
    this.setState({passwordConfirm: event.target.value});
  }
  handleDateChange(date) {
    debugger;
    this.setState({dob: date});
  }


  onSubmit = (e) => {
    e.preventDefault();
    this.props.registrationWatcher({
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      address: this.state.address,
      cellphone: this.state.cellphone,
      dob: this.state.dob,
      zipCode: this.state.zipCode,
      additionalLinks: this.state.additionalLinks,
      history: this.props.history
    });
  }

  render() {
    let loginErrorMessage = null;
    if (this.props.loginErrorMessage) loginErrorMessage = this.props.loginErrorMessage;
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
            maxLength={10}
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
            //value={this.state.cellphone}
            //onChange={this.handleCellphoneChange}
            className="inputBox"
            placeholder="Dropdown here"
          />
          </div>
          <div className="col-md-2 mr-3">
          <label className="inputLabel"> Zipcode: </label>
          <input
            maxLength={5}
            value={this.state.zipCode}
            onChange={this.handleZipCodeChange}
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
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Citizenship Status
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <option class="dropdown-item" value="US_Citizen">U.S. Citizen</option>
                  <option class="dropdown-item" >Visa</option>
                  <option class="dropdown-item" >Eskimo</option>
                </div>
            </div>
          </div>
        </div>
        <label className="inputLabel">Additional Links:</label>
        <div className="row">
          <div className="col-md-12 ml-0">
          <input
            value={this.state.additionalLinks}
            onChange={this.handleAdditionalLinksChange}
            className="inputLinks"
            placeholder="Put any additional links here"
          />
          </div>
        </div>
        <label className="inputLabel">Password</label>
        <div className="row">
          <div className="col-md-12 ml-0">
          <input
            maxLength={20}
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
            maxLength={20}
            value={this.state.passwordConfirm}
            onChange={this.handlePasswordConfirmChange}
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
        <p className="error-text">{loginErrorMessage}</p>
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
    loginErrorMessage: state.registration.loginErrorMessage
  };
};

// applicantRegistration.PropTypes = {
//   email: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
//   loginWatcher: PropTypes.func
// }


export default connect(mapStateToProps, mapDispatchToProps)(applicantRegistration);
