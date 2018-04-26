import React, {Component} from 'react';
import '../../css/main.css';
import {Layout, Menu, Icon} from 'antd';
import FooterComponent from '../../components/footer/FooterComponent';
import HeaderComponent from '../../components/header/HeaderComponent';
import AgentsPage from '../agentsPage';
// import MinerPage from '../minerPage';
// import OrderPage from '../orderPage';

const {Content, Sider} = Layout;
const SubMenu = Menu.SubMenu;

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({collapsed});
  };

  render() {
    return (
      <div className="App-container">
        <Layout style={{minHeight: '100vh'}}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo"/>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

              <Menu.Item key="1">
                <Icon type="pie-chart"/>
                <span>首页</span>
              </Menu.Item>

              <Menu.Item key="2">
                <Icon type="desktop"/>
                <span>订单</span>
              </Menu.Item>

              <SubMenu
                key="sub1"
                title={<span><Icon type="user"/><span>代理点</span></span>}
              >
                <Menu.Item key="3">一号代理点</Menu.Item>
                <Menu.Item key="4">二号代理点</Menu.Item>
                <Menu.Item key="5">三号代理点</Menu.Item>
              </SubMenu>

              <SubMenu
                key="sub2"
                title={<span><Icon type="team"/><span>矿场</span></span>}
              >
                <Menu.Item key="6">四川矿场</Menu.Item>
                <Menu.Item key="8">内蒙古矿场</Menu.Item>
              </SubMenu>

              <Menu.Item key="9">
                <Icon type="file"/>
                <span>关于我们</span>
              </Menu.Item>

            </Menu>
          </Sider>
          <Layout>
            <HeaderComponent/>
            <Content>
              <AgentsPage/>
            </Content>

            <FooterComponent/>
          </Layout>
        </Layout>
      </div>
    )
  }
}