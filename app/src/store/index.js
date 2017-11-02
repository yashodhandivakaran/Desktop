import { createStore } from 'redux';
import reducer from '../reducers';

let singleton

class Store {
  constructor() {
    this.store = null;
  }

  getStore() {
    return this.store;
  }

  configureStore(initialState) {
    // redux store is created with initial state
    this.store = createStore(reducer,
                             initialState);
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