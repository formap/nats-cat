import React from 'react';
import './info.css';


class Info extends React.Component {
  render() {
    return (
        <div className='infoBox'>
          <div className='header'>
            <div className='icon left' onClick={() => this.props.history.goBack()}>
              <img src='/icons/back.svg' alt='Back Icon' />
            </div>
            <div className='section-header title'>About {this.props.countryName}</div>
          </div>
          <div className="row">
            <div className='information-field left'>
              <span className='label'>Population</span>
              <span className='value'>4,076,246{this.props.population}</span>
            </div>
            <div className='information-field right'>
              <span className='label'>Area</span>
              <span className='value'>56,594 km2{this.props.area}</span>
            </div>
          </div>
          <div className="row">
            <div className='information-field left'>
              <span className='label'>Capital</span>
              <span className='value'>Zagreb{this.props.capital}</span>
            </div>
          </div>
          <div className="row">
            <div className='information-field left'>
              <span className='label'>Currency</span>
              <span className='value'>Kuna (HRK){this.props.currency}</span>
            </div>
          </div>
          <div className="row">
            <div className='information-field left'>
              <span className='value'>1 EUR{this.props.currency0}</span>
            </div>
            <div className='information-field right'>
              <span className='value'>GBP{this.props.currency1}</span>
              <span className='value'>USD{this.props.currency2}</span>
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