import React from 'react';
import InputField from '@kiwicom/orbit-components/lib/InputField';
import '../Home.css';

function Home() {
  const onChange = () => {
    console.log('change');
  }

  return (
    <div className="divWrapper">
    <div className="textWrapper">Where to next?</div>
      <div className='searchFieldWrapper'>
        <InputField placeholder='Search'/>
      </div>
    </div>
  );
}

export default Home;