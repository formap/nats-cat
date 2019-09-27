import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Info from './Info';
import Tags from './Tags';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" />
        <header></header>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/:countryId/info" render={(props) => <Info {...props} />}/>
        <Route path="/:countryId/tags" render={(props) => <Tags {...props} />}/>
    </Router>
  );
}

export default App;
