import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Actions from '../../../actions';

class Cover extends Component {
  render() {
    let compProps = {};
    if (this.props.location.pathname === '/') {
      // Page 1 is loaded;
      compProps = this.props.page1;
    }

    if (this.props.location.pathname === '/page2') {
      // Page 1 is loaded;
      compProps = this.props.page2;
    }

    if (this.props.location.pathname === '/page3') {
      // Page 1 is loaded;
      compProps = this.props.page3;
    }
    
    
    return(<div>
      <h1> {this.props.page.data} </h1>
      <p>{`Current Page: ${this.props.page.number} | Current Route: ${this.props.location.pathname}` }</p>
      <div>{ React.cloneElement(this.props.children,compProps) }</div>
      <div>
        <ul> 
          <li> <button
              type='button'
              onClick={() => {
                this.props.router.push('/');
                this.props.dispatch(Actions.pageChange(1));
              }}>Page 1 </button>
          </li>
          <li> <button
              type='button'
              onClick={() => {
                this.props.router.push('/page2');
                this.props.dispatch(Actions.pageChange(2));
              }}> Page 2 </button>
          </li>
          <li> <button
              type='button'
              onClick={() => {
                this.props.router.push('/page3');
                this.props.dispatch(Actions.pageChange(3));
              }}> Page 3 </button>
          </li>
        </ul>
        </div>
      </div>);
  }
}

function mapStateToProps(state) {
  return {
    page: state.page,
    page1: state.page1,
    page2: state.page2,
    page3: state.page3,
  }
}

Cover.propTypes = {
  children: PropTypes.element.isRequired,
};

Cover = connect(mapStateToProps)(Cover);
export default Cover;
