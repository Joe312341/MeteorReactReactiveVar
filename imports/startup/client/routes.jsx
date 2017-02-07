import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import AppContainer from '/imports/ui/containers/AppContainer.jsx';
import NotFoundPage from '/imports/ui/pages/NotFoundPage.jsx';
import OverviewContainer from '/imports/ui/containers/OverviewContainer.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={OverviewContainer}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);
