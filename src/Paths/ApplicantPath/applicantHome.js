import React, { Component } from 'react';
import Button from '../../NavButton/NavButton';
import { connect } from 'react-redux';

class applicantHome extends Component {
    render () {

      let profileStatus = null;
      if (this.props.profile) profileStatus = this.props.profile.profileStatus;
      if (profileStatus === null || profileStatus !== "applicant"){

        return (
          <h2>you are not an applicant</h2>
        )
      }
      else {
        return (
            <div className="container">
                <section className="section">
                    <div className="container">
                        <h1 className="title">Applicant Page</h1>
                    </div>
                </section>

            </div>
        )
      }
    }
}

const mapStateToProps = (state) => {
  return {
    profile: state.login.profile
  };
};

export default connect(mapStateToProps)(applicantHome);
