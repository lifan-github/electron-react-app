import React, {Component} from 'react';
import {Menu, Dropdown, Icon} from 'antd';


class HeaderComponent extends Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <Icon type="user" style={{fontSize: 16, color: '#666', marginRight: "10px"}}/>
          <span>18266913301</span>
        </Menu.Item>
        <Menu.Item key="1">
          <Icon type="lock" style={{fontSize: 16, color: '#666', marginRight: "10px"}}/>
          <span>密码修改</span>
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item key="3">
          <Icon type="logout" style={{fontSize: 16, color: '#666', marginRight: "10px"}}/>
          <span onClick={this.props.signOut}>安全退出</span>
        </Menu.Item>
      </Menu>
    );

    return (
      <div className="header-container">
        <span className="header-photo"/>
        <Dropdown overlay={menu} trigger={['click']}>
          <div className="header-login-out">
            <Icon type="caret-down" style={{fontSize: 16, color: '#999'}}/>
          </div>
        </Dropdown>
      </div>
    );
  }
}

export default HeaderComponent;
