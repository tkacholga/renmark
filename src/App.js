import React, { Component } from 'react';
import HomeComponent from './components/HomeComponent';
import CompanyComponent from './components/CompanyComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/companies/:id" component={CompanyComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
