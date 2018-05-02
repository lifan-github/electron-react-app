import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CustomHome from './CustomHome';
import Login from '../containers/Login';
import PrivateRoute from '../components/PrivateRoute';

class Layout extends Component {
  static propTypes = {
    logged: PropTypes.bool,
  };

  render(){
    const {logged} = this.props.signInReducer;
    console.log(logged,'logged--->>>');
    return(
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute isAuthenticated={logged} component={CustomHome} />
      </Switch>
    )
  }
}


function select(state) {
  return {
    signInReducer: state.SignInReducer
  }
}


export default connect(select)(Layout);
