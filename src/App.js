import React from 'react';
import Home from './pages/Home';
import Footer from './components/Footer';
import 'bulma/css/bulma.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Projects from './pages/Projects';

import AboutMe from './pages/AboutMe';

const App = () => (
  <React.Fragment>
    <Router>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/aboutme' component={AboutMe} />
        <Route exact path='/portfolio' component={Projects} />
      </Switch>
      <Footer />
    </Router>
  </React.Fragment>
);

export default App;
