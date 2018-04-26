import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, Route, Switch } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from './store';
//页面
import LoginPage from './containers/LoginPage';
import MainPage from './containers/mainPage/MainPage';


const syncHistoryWithStore = (store, history) => {
  const { routing } = store.getState();
  if(routing && routing.location) {
    history.replace(routing.location);
  }
};

const initialState = {};
const routerHistory = createMemoryHistory();
const store = configureStore(initialState, routerHistory);
syncHistoryWithStore(store, routerHistory);

export default class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={routerHistory}>
          <Switch>
            <Route exact path="/" component={LoginPage}/>
            <Route path="/mainPage" component={MainPage}/>
          </Switch>
        </Router>
      </Provider>
    )
  }
}