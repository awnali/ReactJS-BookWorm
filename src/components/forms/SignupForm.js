import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import isEmail from 'validator/lib/isEmail';
import InlineError from '../messages/InlineError';

class SignupForm extends Component {
  state = {
    data: { email: '', password: '' },
    loading: false,
    errors: {},
  };
  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false }),
        );
    }
  };
  validate = data => {
    const errors = {};
    if (!data.password) errors.password = "password can't be empty";
    if (!isEmail(data.email)) errors.email = 'Email is invalid';
    return errors;
  };
  render() {
    const { data, loading, errors } = this.state;
    return (
      <div>
        <Form loading={loading}>
          <Form.Field error={!!errors.email}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Email"
              id="email"
              name="email"
              value={data.email}
              onChange={this.onChange}
            />
            {!!this.state.errors.email && (
              <InlineError text={this.state.errors.email} />
            )}
          </Form.Field>
          <Form.Field error={!!errors.password}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="*****"
              id="password"
              name="password"
              value={data.password}
              onChange={this.onChange}
            />
            {!!this.state.errors.password && (
              <InlineError text={this.state.errors.password} />
            )}
          </Form.Field>
          <Button primary onClick={this.onSubmit}>
            Signup
          </Button>
        </Form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default SignupForm;
