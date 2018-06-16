import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import BrowseTours from '../pages/BrowseTours';
import TourPage from '../pages/TourPage';
import Booking from '../pages/Booking';

export const history = createBrowserHistory();
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/search/:location?" component={BrowseTours} exact />
        <Route path="/tours/:id" component={TourPage} exact />
        <Route path="/booking/:id" component={Booking} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
