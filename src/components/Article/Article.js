import React from 'react';
import './article.css';

class Article extends React.Component {
    render() {
        return (
            // eslint-disable-next-line react/jsx-no-target-blank
            <a href={this.props.url} target='_blank'>
                <article>
                    <img src={this.props.image} alt='News' />
                    <div className='floating-blur'></div>
                    <span className='headline'>{this.props.headline}</span>
                </article>
            </a>
        );
    }
}

export default Article;