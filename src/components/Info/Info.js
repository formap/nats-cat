import React from 'react';
import './info.css';


class Info extends React.Component {
  state = {
    info:  {}
  };

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    const country = this.props.match.params.country;
    fetch(`http://10.10.72.89:8080/info?country=${country}`)
        .then((data) => data.json())
        .then((res) => this.setState({ info: res }));
}

  render() {
    return (
        <div className='infoBox'>
          <div className='header'>
            <div className='icon left' onClick={() => this.props.history.goBack()}>
              <img src='/icons/back.svg' alt='Back Icon' />
            </div> 
            <div className='section-header title'>About {this.props.match.params.country.charAt(0).toUpperCase() +this.props.match.params.country.slice(1)}</div>
          </div>
          <div className="row">
            <div className='information-field left'>
              <span className='label'>Population</span>
              <span className='value'>{this.state.info.Population && this.state.info.Population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span>
            </div>
            <div className='information-field right'>
              <span className='label'>Area</span>
              <span className='value'>{this.state.info.Area && this.state.info.Area.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} km2</span>
            </div>
          </div>
          <div className="row">
            <div className='information-field left'>
              <span className='label'>Capital</span>
              <span className='value'>{this.state.info.Capital}</span>
            </div>
          </div>
          <div className="row">
            <div className='information-field left'>
              <span className='label'>Currency</span>
              <span className='value'>{this.state.info.Currency}</span>
            </div>
          </div>
          <div className="row">
            <div className='information-field left'>
              <span className='value'>1 {this.state.info.Currency}</span>
            </div>
            <div className='information-field right'>
              <span className='value'>{this.state.info.Conversion && this.state.info.Conversion.GBP} GBP</span>
              <span className='value'>{this.state.info.Conversion && this.state.info.Conversion.USD} USD</span>
            </div>
          </div>
          <div className="row">
            <div className='information-field left'>
              <span className='label'>Government</span>
              <span className='value'>Pedro Sánchez{this.props.leader}</span>
              <span className='value'>Socialist Party{this.props.party}</span>
            </div>
          </div>
          <div className="row">
            <div className='information-field left'>
              <span className='label'>Air Pollution</span>
              <span className='value bad'>11 Micrograms per cubic metre{this.props.airPollution}</span>
            </div>
          </div>
          <div className="row">
            <div className='information-field left'>
              <span className='label'>Water Quality</span>
              <span className='value regular'>72%{this.props.waterQuality}</span>
            </div>
          </div>
          <div className="row">
            <div className='information-field left'>
              <span className='label'>Unemployment Rate</span>
              <span className='value regular'>7.66{this.props.unemployment}</span>
            </div>
          </div>
          <div className="row">
            <div className='information-field left'>
              <span className='label'>Feeling Safe Walking Alone At Night</span>
              <span className='value good'>82.1%{this.props.nightSafety}</span>
            </div>
          </div>
        </div>
    );
  }
}

export default Info;