import React, { Component } from 'react';
import Button from '../../NavButton/NavButton';
import { connect } from 'react-redux';

class adminHome extends Component {
    render () {
      let profileStatus = null;
      if (this.props.profile) profileStatus = this.props.profile.profileStatus;
      if (profileStatus === null || profileStatus !== "admin"){
        return (
          <h2>you are not an admin</h2>
        )
      }
      else {
        return (
            <div className="container">
                <section className="section">
                    <div className="container">
                        <h1 className="title">Lazy Loading</h1>
                        <h2 className="subtitle">
                            A simple app to demonstrate how lazy loading routes in React works.
                        </h2>
                        <section className="bottom">
                            <Button name="Go to the Good one" link="/maps" />
                            <Button name="Go to the other one" link="/blog" />
                        </section>
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

export default connect(mapStateToProps)(adminHome);
