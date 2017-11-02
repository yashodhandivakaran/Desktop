import React from 'react'; // this is required as in bundle.js React.createElement is called, if not imported then will get Uncaught ReferenceError: React is not defined

import { Route, IndexRoute } from 'react-router';
import App from './components/containers/App';
import Cover from './components/containers/Cover';
import Page1 from './components/presentational/Page1';
import Page2 from './components/presentational/Page2';
import Page3 from './components/presentational/Page3';

export default ( 
  <Route component={App}>
    <Route path='/' component={Cover}>
      <IndexRoute component={Page1}/>
      <Route path='page2' component={Page2}/>
      <Route path='page3' component={Page3}/>
    </Route>
  </Route>
);