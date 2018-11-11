import React, { Component } from 'react';
import {Provider} from 'react-redux';
import TopSearch from './components/TopSearch';
import ContainerLayout from './containers/ContainerLayout';
import Footer from './components/Footer';
import store from './redux/reducers/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="body-container">
          <TopSearch/>
          <ContainerLayout/>
          <Footer/>
        </div>
      </Provider>
    );
  }
}

export default App;
