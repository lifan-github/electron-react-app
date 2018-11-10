import React, {Component} from 'react';
import '../styles/container-layout.css'

export default class ContainerLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="container-layout">
        <div className="left-layout">
          <div className="recommended-text">推荐</div>

        </div>
        <div className="right-layout"></div>
      </div>
    )
  }
}