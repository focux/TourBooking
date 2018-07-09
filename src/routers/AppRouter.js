import React, { Fragment } from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';
import NotFoundPage from '../pages/NotFoundPage';
import SaleBar from 'Components/SaleBar';
import HomePage from '../pages/HomePage';
import BrowseTours from '../pages/BrowseTours';
import TourPage from '../pages/TourPage';
import Booking from '../pages/Booking';
import AuthProtectedRoute from './AuthProtectedRoute';
import ContactPage from '../pages/ContactPage';
import MyBookings from '../pages/MyBookings';

export const history = createBrowserHistory();
const isAuthenticated = !!localStorage.getItem('user');
const AppRouter = ({ isAuth, showSaleBar }) => (
  <Router history={history}>
    <Fragment>
      {showSaleBar && <SaleBar />}
      <div style={showSaleBar ? { marginTop: '7rem' } : {}}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/contactus" component={ContactPage} exact />
          <Route path="/search/:location?" component={BrowseTours} exact />
          <Route path="/tours/:id" component={TourPage} exact />
          <AuthProtectedRoute path="/booking/:id" isAuthenticated={isAuthenticated || isAuth} component={Booking} exact />
          <AuthProtectedRoute path="/profile/bookings" isAuthenticated={isAuthenticated || isAuth} component={MyBookings} exact />
          <Redirect to="/" />
        </Switch>
      </div>
    </Fragment>
  </Router>
);

const mapStateToProps = (state) => ({
  isAuth: !!state.user.id,
  showSaleBar: state.ui.showSaleBar
});

export default connect(mapStateToProps)(AppRouter);
