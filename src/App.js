import React from 'react';
import { Route } from 'react-router-dom';
import PropType from 'prop-types';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignupPage';
import DashboardPage from './components/pages/DashboardPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

const App = ({ location }) => (
  <div className="ui container">
    <Route path="/" exact component={HomePage} />
    <GuestRoute location={location} path="/login" exact component={LoginPage} />
    <GuestRoute location={location} path="/signup" exact component={SignUpPage} />
    <UserRoute
      location={location}
      path="/dashboard"
      exact
      component={DashboardPage}
    />
  </div>
);
App.propTypes = {
  location: PropType.shape({
    pathname: PropType.string.isRequired,
  }).isRequired,
};

export default App;
