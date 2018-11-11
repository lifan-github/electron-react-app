import React, {Component} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Recommended from './musicSubPage/index';
import ListTop from './musicSubPage/ListTop';
import Playlist from './musicSubPage/Playlist';
import Host from './musicSubPage/Host';
import NewMusic from './musicSubPage/NewMusic';
import '../styles/music.css';


export default class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="music-container">
        <header className="music-header">
          <Link to={'/music/recommended'} className="sub-nav-item">推荐</Link>
          <Link to={'/music/listTop'} className="sub-nav-item">排行榜</Link>
          <Link to={'/music/playList'} className="sub-nav-item">歌单</Link>
          <Link to={'/music/host'} className="sub-nav-item">主播电台</Link>
          <Link to={'/music/newMusic'} className="sub-nav-item">最新音乐</Link>
        </header>

        <Router>
          <div className="switch-sub-page">
            <Route exact path="/" component={Recommended}/>
            <Route exact path="/music/recommended" component={Recommended}/>
            <Route path="/music/listTop" component={ListTop}/>
            <Route path="/music/playList" component={Playlist}/>
            <Route path="/music/host" component={Host}/>
            <Route path="/music/newMusic" component={NewMusic}/>
          </div>
        </Router>
      </div>
    )
  }
}