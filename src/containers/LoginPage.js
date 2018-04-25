import React, {Component} from 'react';

import '../css/login.css';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="Login-container">
        <div className="Login-box">
          <button className="Login-button">登录APP</button>
        </div>
      </div>
    )
  }
}