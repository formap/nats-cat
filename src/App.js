import React from 'react';
import { BrowserRouter as Router, Route, Link,  } from "react-router-dom";
import GeneralInfo from './GeneralInfo';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" />
        <header>
         
        </header>

          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route path="/:countryId/info" render={(props) => <GeneralInfo {...props} />}/>
    </Router>
  );
}

export default App;
