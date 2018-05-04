import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Layout, Menu, Icon, BackTop, message} from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import HomePage from '../containers/home';
import OrdersPage from '../containers/orders';
import PlatfromsOne from '../containers/platfroms';
import PlatfromsTwo from '../containers/platfroms/PlatfromsTwo';
import AboutUs from '../containers/aboutUs';
import {signOut} from '../redux/actions/SiginActions';
import {allNews} from '../redux/actions/HomeActions';


const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;


class CustomHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }

  componentDidMount(){
    this.props.allNews();
    this.loadingRquest();
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({collapsed});
  };

  signOut(){
    this.props.signOut();
  }

  getAllNews(){
    this.props.allNews();
  }

  loadingRquest = () => {
    const hide = message.loading('Action in progress..', 0);
    setTimeout(hide, 2500);
  };

  render() {
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
              <Link to="/" onClick={() => this.getAllNews()}>
                <Icon type="pie-chart"/>
                <span>新闻头条</span>
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
            <HeaderComponent signOut={() => this.signOut()}/>
          </Header>
          <Content>
            <BackTop>
              <div className="ant-back-top-inner">top</div>
            </BackTop>
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

export default connect((state) => {
  return {
    homeReducers: state.HomeReducers
  }
}, {allNews, signOut})(CustomHome)



