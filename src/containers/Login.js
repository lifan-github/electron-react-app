import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'antd';
import {signIn} from '../redux/actions/SiginActions';

class Login extends Component {
  signIn(){
    this.props.dispatch(signIn());
  }

  render(){
    const { from } = { from: { pathname: '/' } };
    const {logged} = this.props.signInReducer;
    if(logged){
      return <Redirect to={from} />
    }else{
      return(
        <div className="Login-container">
          <div className="Login-box">
            <Button type="primary" onClick={() => this.signIn()}>登录</Button>
          </div>
        </div>
      )
    }
  }
}

function select(state) {
  return {
    signInReducer: state.SignInReducer
  }
}


export default connect(select)(Login);
