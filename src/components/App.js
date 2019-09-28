import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Country from './Country/index';
import Home from './Home/index';
import Info from './Info/index';
import Tags from './Tags/index';
import TagNews from './TagNews/index';
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
        <Route exact path='/:countryId/tags/:tagId' render={(props) => <TagNews {...props} />}/>
      </div>
    </Router>
  );
}

export default App;
