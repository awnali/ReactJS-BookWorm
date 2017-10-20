import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/actions/auth';
import LoginForm from '../forms/LoginForm';

class LoginPage extends Component {
  submit = data => {
    this.props.login(data).then(() => this.props.history.push('/'));
  };
  render() {
    return (
      <div>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}
LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};
export default connect(null, { login })(LoginPage);
