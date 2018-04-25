import React, {Component} from 'react';
import { Link } from 'react-router-dom';

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
          <Link className="Login-button" to="/home">进入home2222页</Link>
        </div>
      </div>
    )
  }
}