import React from 'react';
import Tag from '../Tag';
import './tags.css';

class Tags extends React.Component {
  render() {
    const tag = [
      {name: 'politics', color: 'purple'}, 
      {name: 'culture', color: 'teal'}, 
      {name: 'environment', color: 'light-green'},
      {name: 'sports', color: 'light-blue'},
      {name: 'opinion', color: 'calm-red'}
    ];
    const tags = [];

    for (let i = 0; i < tag.length; ++i) {
      let name = tag[i].name;
      if (!!name) {
        name = name.toLowerCase();
        name = name.charAt(0).toUpperCase() + name.substring(1);
      }
      let color = tag[i].color;
      tags.push(<Tag key={name} countryId={this.props.match.params.countryId} tagId={tag[i].name} name={name} color={color}/>);
    }

    return (
      <div className='tags-wrapper'>
        <div className='section-header'>Popular tags</div>
        {tags}
      </div>
    );
  }
}

export default Tags;