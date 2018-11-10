import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import TopSearch from './components/TopSearch';
import ContainerLayout from './containers/ContainerLayout';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="body-container">
          <TopSearch/>
          <Route component={ContainerLayout}/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
