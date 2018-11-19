import React, {Component} from 'react';

export default class HotSelected extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="hot-container">
        <div className="hot-title"><span>热门精选</span></div>
        <div className="hot-music-box">
          {
            this.props.musicData.map((item, index) => {
              return (
                <div className="hot-list-box" key={item.id}>
                  <div className="music-items-box">
                    <img src={item.coverUrl} alt=""/>
                  </div>
                  <div className="music-text">{item.albumTitle}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}