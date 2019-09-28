import React from 'react';
import Article from '../Article/index';
import './country.css';

// import { MAPS_API_KEY } from '../../environment.js';

class Country extends React.Component {

  loadMap(key) {
    function initMap() {
      /* eslint-disable no-undef */
      const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    }

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`, true);
    xhttp.send();
  }

  componentDidMount() {
    // this.loadMap();
  }

  getArticles() {
    const articles = [
      {img: '/images/news_1.png', headline: 'Croatian police use violence to push back migrants, president admits'},
      {img: '/images/news_2.jpg', headline: 'Croatian police use violence to push back migrants, president admits'},
      {img: '/images/news_3.jpg', headline: 'Croatian police use violence to push back migrants, president admits'},
    ];

    const articleComponents = [];
    for (let i = 0; i < articles.length; ++i) {
      let image = articles[i].img;
      let headline = articles[i].headline;
      articleComponents.push(<Article key={i} image={image} headline={headline} />);
    }

    return articleComponents;
  }

  render() {
    const countryName = 'croatia';
    const sectionTitle = "what's happening";
    // this.loadMap = this.loadMap.bind(this, MAPS_API_KEY);

    return (
      <div className='country'>
        <div className='header'>
          <div className='section-header title'>{countryName.toUpperCase()}</div>
          <div className='icon'><img src='/icons/search.svg' alt='Search Icon' /></div>
        </div>
        <div id='map' className='map'>
          <div className='overlay'></div>
          <div className='flag'>
            <img src='/images/flag.svg' alt='Search Icon' />
          </div>
          <div className='floating-blur'></div>
          <div className='floating-data'>
            <div className='data-column'>
              <span className='secondary'>Population</span>
              <span>4,076,246</span>
            </div>
            <div className='data-column'>
              <span className='secondary'>Area</span>
              <span>56,594 km2</span>
            </div>
            <div className='data-column'>
              <span className='secondary'>Capital</span>
              <span>Zagreb</span>
            </div>
          </div>
        </div>
        <div className='news'>
          <div className='section-header title'>{sectionTitle.toUpperCase()}</div>
          <div className='tabs'>
            <div className='tab purple'>
              <span className='text'>Politics</span>
            </div>
            <div className='tab light-green'>
              <span className='text'>Environment</span>
            </div>
            <div className='tab yellow'>
              <span className='text'>More</span>
            </div>
          </div>
          <div className='articles'>
            {this.getArticles()}
          </div>
        </div>
      </div>
    );
  }
}

export default Country;