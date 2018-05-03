import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

export default class PrivateRoute extends Component {
  render() {
    const {isAuthenticated, customHome} = this.props;
    if (isAuthenticated) {
      return(
        <Route component={customHome}/>
      )
    } else {
      return(
        <Redirect to={{pathname: '/login'}}/>
      )
    }
  }
}

