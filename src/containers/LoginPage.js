import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd';
import 'antd/dist/antd.css';
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
          <Link to="/mainPage">
            <Button className="Login-button">登录1</Button>
          </Link>
          <span className="icon-style"/>
          <i className="icon-colud">&#xe64e;</i>
        </div>
      </div>
    )
  }
}