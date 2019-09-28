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
        <Route exact path='/:country' render={(props) => <Country {...props} />}/>
        <Route exact path='/:country/info' render={(props) => <Info {...props} />}/>
        <Route exact path='/:country/tags' render={(props) => <Tags {...props} />}/>
        <Route exact path='/:country/tags/:tag' render={(props) => <TagNews {...props} />}/>
      </div>
    </Router>
  );
}

export default App;
