import React, { Component } from 'react';
import TopSearch from './components/TopSearch';
import ContainerLayout from './containers/ContainerLayout';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="body-container">
        <TopSearch/>
        <ContainerLayout/>
        <Footer/>
      </div>
    );
  }
}

export default App;
