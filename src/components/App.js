import React from 'react';
import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';

const App = () => {

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => {return (<Home />)}} />
          <Route exact path="/about" render={() => {return (<About />)}} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;