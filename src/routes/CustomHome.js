import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Layout, Menu, Icon} from 'antd';
import {signOutWithCb} from "../store/fakeAuth";
import HeaderComponent from '../components/HeaderComponent';
import HomePage from '../containers/home';
import OrdersPage from '../containers/orders';
import PlatfromsOne from '../containers/platfroms';
import PlatfromsTwo from '../containers/platfroms/PlatfromsTwo';
import AboutUs from '../containers/aboutUs';

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;


class CustomHome extends Component {
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
    const {signOut} = this.props;
    return (
      <Layout style={{minHeight: '100vh'}}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="main-logo"/>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="pie-chart"/>
                <span>首页</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/ordersPage">
                <Icon type="desktop"/>
                <span>订单</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user"/><span>代理点</span></span>}
            >

              <Menu.Item key="3">
                <Link to="/platfromsOne">1号代理点</Link>
              </Menu.Item>

              <Menu.Item key="4"><Link to="/platfromsTwo">2号代理点</Link></Menu.Item>

            </SubMenu>
            <Menu.Item key="6">
              <Link to="/aboutUs">
                <Icon type="file"/>
                <span>关于我们</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{background: '#fff', padding: 0}}>
            <HeaderComponent signOut={signOut}/>
          </Header>
          <Content>
            <div className="main-container">
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/ordersPage" component={OrdersPage}/>
                <Route path="/platfromsOne" component={PlatfromsOne}/>
                <Route path="/platfromsTwo" component={PlatfromsTwo}/>
                <Route path="/aboutUs" component={AboutUs}/>
              </Switch>
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    )
  }
}


const mapStateToProps = state => ({});

const mapDispatchToProps = {
  signOut: signOutWithCb
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomHome);