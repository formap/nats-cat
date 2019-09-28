import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

class Home extends React.Component {
  constructor() {
    super();
    this.destinations = ['spain', 'croatia', 'turkey', 'greece', 'france', 'italy'].sort();
    this.state = {
      currentDestinations: Array.from(this.destinations)
    }
    
  }

  onChange(destinations) {
    const searchValue = document.getElementById('searchField').value;
    const newDestinations = [];
    for (let i = 0; i < destinations.length; ++i) {
      if (destinations[i].includes(searchValue)) {
        newDestinations.push(destinations[i]);
      }
    }
    console.log(newDestinations);
    this.setState({currentDestinations: newDestinations});
  }

  loadDestinations() {
    const destinationComponents = [];

    for (let i = 0; i < this.state.currentDestinations.length; ++i) {
      destinationComponents.push(
        <Link key={this.state.currentDestinations[i]} to={`/${this.state.currentDestinations[i]}`} className='link'>
          <div className={this.state.currentDestinations[i]}>
            {this.state.currentDestinations[i].charAt(0).toUpperCase() + this.state.currentDestinations[i].substring(1)}
          </div>
        </Link>
      );
    }
    return destinationComponents;
  }

  render() {
    return (
      <div className='divWrapper'>
        <div className='section-header'>
          Where to next?
        </div>
        
        <div className='searchFieldWrapper'>
          <input id='searchField' className='searchField' placeholder='Search' onChange={this.onChange.bind(this, this.destinations)} />
        </div>

        {this.loadDestinations()}
          
      </div>
    );
  }
}

export default Home;