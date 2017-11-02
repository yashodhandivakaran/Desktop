import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
  render() {
    // this just returning view
    // return (<h1> React Component Loaded </h1>);

    // this.props.children is taken from routes.js. Component is loaded based on current route path specified in routes.js
    return(
      <div>{this.props.children}</div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
}