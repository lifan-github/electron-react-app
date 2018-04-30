import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeaderComponent extends Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired
  };

  render() {
    return (
      <span onClick={this.props.signOut}>
        退出登录
      </span>
    );
  }
}

export default HeaderComponent;
