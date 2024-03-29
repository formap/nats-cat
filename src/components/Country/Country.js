import React from 'react';
import { Link } from 'react-router-dom';
import CountryFlag from '@kiwicom/orbit-components/lib/CountryFlag';
import Article from '../Article/index';
import './country.css';

class Country extends React.Component {

  constructor(props) {
    super(props);
    this.countryCodes = {
      'croatia': 'hr',
      'france': 'fr',
      'italy': 'it',
      'spain': 'es',
      'Unknown': 'us'
    };
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles() {
    fetch(`http://10.10.72.89:8080/articles?country=${this.props.match.params.country}`)
      .then((data) => data.json())
      .then((res) => {
        const articles = [];
        
        for (let i = 0; i < res.length; ++i) {
          let image = res[i].img;
          let headline = res[i].title;
          articles.push(<Article key={i} image={image} headline={headline} url={res[i].url} />);
        }
        this.setState({ articles });
    });
  }

  render() {
    const countryName = this.props.match.params.country || 'Unknown';
    const flagCode = this.countryCodes[countryName] || 'us';
    const sectionTitle = "what's happening";

    return (
      <div className='country'>
        <div className='header'>
          <div className='icon left' onClick={() => this.props.history.goBack()}>
            <img src='/icons/back.svg' alt='Back Icon' />
          </div>
          <div className='section-header title'>{countryName.toUpperCase()}</div>
          <div className='icon right'>
            <Link to='/' className='link'>
              <img src='/icons/search.svg' alt='Search Icon' />
            </Link>
          </div>
        </div>
        <Link to={`/${this.props.match.params.country}/info`} className='link'>
          <div id='map' className={`map ${this.props.match.params.country}-map`}>
            <div className='overlay'></div>
            <div className='flag'>
              <CountryFlag code={flagCode} size="medium" name={countryName} />
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
        </Link>
        <div className='news'>
          <div className='section-header title'>{sectionTitle}</div>
          <div className='tabs'>
            <Link to={`/${this.props.match.params.country}/tags/politics`} className='link'>
            <div className='tab purple'>
              <span className='text'>Politics</span>
            </div>
            </Link>
            <Link to={`/${this.props.match.params.country}/tags/environment`} className='link'>
              <div className='tab light-green'>
                <span className='text'>Environment</span>
              </div>
            </Link>
            <Link to={`/${this.props.match.params.country}/tags`} className='link'>
              <div className='tab yellow'>
                <span className='text'>More</span>
              </div>
            </Link>
          </div>
          <div className='articles'>
            {this.state.articles}
          </div>
        </div>
      </div>
    );
  }
}

export default Country;