import React from 'react';
import './country.css';

class Country extends React.Component {

  render() {
    const countryName = 'croatia';
    return (
      <div className='country'>
        <div className='header'>
          <div className='section-header title'>{countryName.toUpperCase()}</div>
          <div className='icon'><img src="/icons/search.svg" alt="Search Icon" /></div>
        </div>
        <div>

        </div>
      </div>
    );
  }
}

export default Country;