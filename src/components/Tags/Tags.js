import React from 'react';
import Tag from '../Tag';
import './tags.css';

class Tags extends React.Component {
  state = {
    tags:  []
  };

  componentDidMount() {
    this.getTags()
  }

  getTags() {
    fetch(`http://10.10.72.89:8080/articlesTagged?country=${this.props.match.params.country}`)
      .then((data) => data.json())
      .then((res) => {
        const tagsApi = [];
        for (let [key, articles] of Object.entries(res)) {
          tagsApi.push({ name: key, articles});
          this.setState({ tags: tagsApi });
        }
    });
  }
  
  render() {
    const colors = ['purple', 'teal', 'light-green', 'light-blue', 'calm-red', 'yellow']
    return (
      <div className='tags-wrapper'>
        <div className='header'>
          <div className='icon left' onClick={() => this.props.history.goBack()}>
            <img src='/icons/back.svg' alt='Back Icon' />
          </div>
          <div className='section-header'>Popular tags</div>
        </div>
        {this.state.tags.map((tag, key) => <Tag key={tag.name} articles={tag.articles} country={this.props.match.params.country} tag={tag.name} name={tag.name} color={colors[key]}/>)}
      </div>
    );
  }
}

export default Tags;