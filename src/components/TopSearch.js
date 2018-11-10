import React, {Component} from 'react';
import '../styles/TopSearch.css';
import setting_img from '../images/setting.png';

export default class TopSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="top-search-container">
        <div className="left-search">
          <div className="logo"></div>
          <div className="next-and-back"></div>
          <div className="search-box"></div>
          <div className="setting-box">
            <img src={setting_img} alt=""/>
          </div>
        </div>
        <div className="right-user-account">

        </div>
      </div>
    )
  }
}