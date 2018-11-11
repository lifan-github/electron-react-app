import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch, Redirect, NavLink} from 'react-router-dom';
import Music from "./Music";
import FM from "./FM";
import MV from "./MV";
import Friends from "./Friends";
import Error from '../components/Error';
import '../styles/container-layout.css';


class SliderNav extends Component{
  constructor(props) {
    super(props);
    this.state = {
      navData: [
        {text: "发现音乐", id: 1, icon: "icon-yinle", selected: true, path: "/"},
        {text: "私人FM", id: 2, icon: "icon-weibiaoti--", path: "/fm"},
        {text: "MV", id: 3, icon: "icon-yanshibofang", path: "/mv"},
        {text: "朋友", id: 4, icon: "icon-pengyou", path: "/friends"},
      ]
    }
  }
  //左侧导航
  bindItems(item){
    const curr_id = item.id;
    const {navData} = this.state;
    for(let i = 0; i < navData.length; i++){
      navData[i].selected = false;
      if(navData[i].id === curr_id){
        navData[i].selected = true;
        this.setState({
          navData
        })
      }
    }

  }

  render(){
    const {navData} = this.state;
    let list = navData.map((item, index) => {
       return(
         <NavLink to={item.path} onClick={() => this.bindItems(item)}
              className={`nav-list ${item.selected ? "selected-style" : "defulat-style"}`}
              key={item.id}
         >
             <i className={`iconfont iconfont-style ${item.icon}`}/>
             <div className="list-item-text">{item.text}</div>
         </NavLink>
       )
    });

    return(
      <div>{list}</div>
    )
  }
}


export default class ContainerLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Router>
        <div className="container-layout">
          <div className="left-layout">
            <div className="recommended-text">推荐</div>
            <SliderNav/>
          </div>
          <div className="right-layout">
            <Switch>
              <Route exact path="/" component={Music}/>
              <Route path="/music" component={Music}/>
              <Route path="/fm" component={FM}/>
              <Route path="/mv" component={MV}/>
              <Route path="/friends" component={Friends}/>
              <Route path="/error" component={Error} />
              <Route path="*" render={() => <Redirect to="/error"/> }/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}