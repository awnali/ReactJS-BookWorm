import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';

const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <h2>Home Page</h2>
    {!isAuthenticated ? (
      <Link to="/login">Login</Link>
    ) : (
      <button onClick={() => logout()}>logout</button>
    )}
  </div>
);
HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};
function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token,
  };
}
export default connect(mapStateToProps,{logout})(HomePage);
