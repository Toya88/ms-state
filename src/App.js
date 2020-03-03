import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Guidesingle from './components/Guidesingle';

import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/guide/:id" component={Guidesingle} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
