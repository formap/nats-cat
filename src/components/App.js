import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Country from './Country';
import Home from './Home';
import Info from './Info';
import Tags from './Tags/index';
import '../App.css';

function App() {
  return (
    <Router>
      <div className='App' >
        <header></header>
        <Route exact path='/' render={(props) => <Home {...props} />} />
        <Route exact path='/:countryId' render={(props) => <Country {...props} />}/>
        <Route exact path='/:countryId/info' render={(props) => <Info {...props} />}/>
        <Route exact path='/:countryId/tags' render={(props) => <Tags {...props} />}/>
      </div>
    </Router>
  );
}

export default App;
