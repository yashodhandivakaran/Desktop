import React from 'react'; // this is required as in bundle.js React.createElement is called, if not imported then will get Uncaught ReferenceError: React is not defined
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import StoreSingleton from './store';
import App from './components/containers/App';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';

// Loading H1 tag of html inside div with id='root'.
// render will create a React component from this simple html and that Compnent is loaded in actual DOM
// We can also pass in a React component here
// render(<h1> React Component Loaded </h1>,
// document.getElementById('root'));

// Let us know setup store for this component
// Redux is the way we manage state of the app via its store, it can be used with vanilla js, angular etc.
// But we want to use it with React so we will use react-redux with redux

/*
 We are going to use Provider a special container-component given by react-redux. 
 It magically make the store available to all container components in the application without passing it explicitly. You only need to use it once when you render the root component
 https://reactjs.org/docs/context.html
*/

const initialState = { page: { number: 1 } };

const storeSingleton = StoreSingleton.getInstance();
storeSingleton.configureStore(initialState);
const store = storeSingleton.getStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store)

// attaching store to component
// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);