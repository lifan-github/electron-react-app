import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { signInWithCb } from '../store/fakeAuth';

const propTypes = {
  signInWithCb: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  logged: PropTypes.bool.isRequired
};

export function Login({ location, logged, signInWithCb }) {
  const { from } = location.state || { from: { pathname: '/' } };
  return logged ? (
    <Redirect to={from} />
  ) : (
    <div className="Login-container">
        <div className="Login-box">
          <Button type="primary" onClick={signInWithCb}>登录</Button>
        </div>
    </div>

  );
}

Login.propTypes = propTypes;

const mapStateToProps = state => ({
  logged: state.logged
});

const mapDispatchToProps = {
  signInWithCb
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
