import React, { Component } from 'react';

export default class Page1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(<div><h2> Page-1 Component </h2><p>{this.props.data}</p></div>);
  }
}
