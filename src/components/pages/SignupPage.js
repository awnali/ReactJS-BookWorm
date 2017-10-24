import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signup } from '../../redux/actions/users';
import SignupForm from '../forms/SignupForm';

class SignupPage extends Component {
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push('dashboard'));

  render() {
    return (
      <div>
        <h2>SignUp </h2>
        <SignupForm submit={this.submit} />
      </div>
    );
  }
}

SignupPage.propTypes = {
  signup: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, { signup })(SignupPage);
