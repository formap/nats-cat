import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  const onChange = () => {
    console.log('change');
  }

  return (
    <div className='divWrapper'>
      <div className='textWrapper'>
        Where to next?
      </div>
      
      <div className='searchFieldWrapper'>
        <input className='searchField' placeholder='Search'/>
      </div>

      <Link to='/spain' className='link'>
        <div className='spain'>
          spain
        </div>
      </Link>

      <Link to='/croatia' className='link'>
        <div className='croatia'>
          croatia
        </div>
      </Link>

      <Link to='/turkey' className='link'>
        <div className='turkey'>
          turkey
        </div>
      </Link>

      <Link to='/greece' className='link'>
        <div className='greece'>
          greece
        </div>
      </Link>
        
    </div>
  );
}

export default Home;