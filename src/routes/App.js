import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Layout from './Layout';
import store from '../store/createStore';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route component={Layout}/>
        </BrowserRouter>
      </Provider>
    )
  }
}