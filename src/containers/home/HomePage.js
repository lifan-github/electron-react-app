import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../css/home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App-container">
        <Link className="Login-button" to="/">退出至登录页面</Link>
      </div>
    )
  }
}