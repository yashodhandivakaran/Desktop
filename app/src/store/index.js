import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducers';

// this is to log all actions and next state after action in console
import { createLogger } from 'redux-logger';

import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

let singleton

class Store {
  constructor() {
    this.store = null;
    this.sagaMiddleware = createSagaMiddleware();

    //routerMiddleware capture dispatched actions created by the action creators. It will redirect those actions to the provided history instance.
    this.router = routerMiddleware(hashHistory);
  }

  getStore() {
    return this.store;
  }

  configureStore(initialState) {
    // redux store is created with initial state
    this.store = createStore(reducer,
                             initialState,
                            applyMiddleware(this.sagaMiddleware, createLogger(),this.router)
                          );
  }
}
export default class StoreSingleton {

  constructor() {
    this.store = new Store();
  }
  static getInstance() {
    if (!singleton) {
      singleton = new StoreSingleton();
    }
    return singleton;
  }

  configureStore(initialState) {
    this.store.configureStore(initialState);
  }

  getStore() {
    return this.store.getStore();
  }
}