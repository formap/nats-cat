import React from 'react';
import './article.css';

class Article extends React.Component {
    render() {
        return (
            <article>
                <img src={this.props.image} alt='News' />
                <div className='floating-blur'></div>
                <span className='headline'>{this.props.headline}</span>
            </article>
        );
    }
}

export default Article;