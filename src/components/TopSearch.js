import React, {Component} from 'react';
import '../styles/TopSearch.css';

export default class TopSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="top-search-container">
        <div className="left-search">
          <div className="logo"/>
          <div className="next-and-back">
            <div className="back-icon selected-icon">
              <i className="iconfont icon-jiantou"/>
            </div>
            <div className="mid-line"/>
            <div className="next-icon">
              <i className="iconfont icon-jiantou"/>
            </div>
          </div>
          <div className="search-box">
            <i className="iconfont icon-sousuo"/>
            <input type="text" placeholder={"搜索音乐、歌手、歌词、用户"}/>
          </div>
          <div className="setting-box">
            <i className="iconfont icon-xiaoxixinfengnews"/>
            <i className="iconfont icon-shezhi"/>
          </div>
        </div>
        <div className="right-user-account">
          <i className="iconfont icon-yonghu"/>
          <i className="iconfont icon-sanjiao"/>
        </div>
      </div>
    )
  }
}