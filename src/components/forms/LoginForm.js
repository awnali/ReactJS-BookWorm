import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import Validator from 'validator';
import PropTypes from 'prop-types';

import InlineError from '../messages/InlineError';

class LoginForm extends Component {
  state = {
    data: { email: '', password: '' },
    loading: false,
    errors: {},
  };
  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(error => this.setState({ errors: error.response.data.errors,loading: false }));
    }
  };
  validate = data => {
    const errors = {};
    if (!data.password) errors.password = "Password can't be blank";
    if (!Validator.isEmail(data.email)) errors.email = 'Email should be valid';
    return errors;
  };
  render() {
    const { data, errors, loading } = this.state;
    return (
      <div>
        <Form loading={loading} >
          {errors.global && <Message negative>{errors.global}</Message>}
          <Form.Field error={!!errors.email}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="example@example.com"
              id="email"
              name="email"
              value={data.email}
              onChange={this.onChange}
            />
            {errors.email && <InlineError text={errors.email} />}
          </Form.Field>
          <Form.Field error={!!errors.password}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="******"
              id="password"
              name="password"
              value={data.password}
              onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password} />}
          </Form.Field>
          <Button primary onClick={this.onSubmit}>
            Login
          </Button>
        </Form>
      </div>
    );
  }
}
LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default LoginForm;
