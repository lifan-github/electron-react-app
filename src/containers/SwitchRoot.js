import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Music from '../containers/Music';
import FM from '../containers/FM';
import MV from '../containers/MV';
import Friends from '../containers/Friends';

export default class SwitchRoot extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Music}/>
          <Route path="/fm" component={FM}/>
          <Route path="/mv" component={MV}/>
          <Route path="/friends" component={Friends}/>
        </Switch>
      </div>
    )
  }
}