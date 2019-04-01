import React, { Component } from 'react';

import { BrowserRouter as Router } from "react-router-dom";
import './../styles/App.css';

import NavBar from './NavBar';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Content />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
