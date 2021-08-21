import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Home from './components/home';
import Offer from './components/offer';
import Information from './components/information';
import Contact from './components/contactUs';


class App extends Component {

  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Home></Home>
            <Offer></Offer>
            <Information></Information>
            <Contact></Contact>
          </div>
        </div>
      </div>

    );

  }
}

export default App;
