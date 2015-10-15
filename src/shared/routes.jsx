import React from 'react';
import {Route} from 'react-router';

import App from './containers/App';
import Composition from './containers/Composition';

export default (
  <Route name="app" component={App} path="/">
    <Route component={Composition} path="/:compositionId" />
  </Route>
);
