import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Movie from './components/Movie';
import store from './store';

import './App.css';

class App extends Component {
  render() {
    return <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/movie/:id" component={Movie} />
          <Footer />
        </div>
      </Router>
    </Provider>;
  }
}

export default App;
