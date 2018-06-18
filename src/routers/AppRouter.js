import React from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import BrowseTours from '../pages/BrowseTours';
import TourPage from '../pages/TourPage';
import Booking from '../pages/Booking';
import AuthProtectedRoute from './AuthProtectedRoute';
import ContactPage from '../pages/ContactPage';

export const history = createBrowserHistory();
const AppRouter = ({ isAuthenticated }) => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/contactus" component={ContactPage} exact />
        <Route path="/search/:location?" component={BrowseTours} exact />
        <Route path="/tours/:id" component={TourPage} exact />
        <AuthProtectedRoute path="/booking/:id" isAuthenticated={isAuthenticated} component={Booking} exact />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.user.id
});

export default connect(mapStateToProps)(AppRouter);
