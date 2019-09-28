import React from 'react';
import Article from '../Article/index';
import './tagNews.css';

class TagNews extends React.Component {
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
        let tagName = this.props.match.params.tagId;
        tagName = !!tagName ? tagName.charAt(0).toUpperCase() + tagName.substring(1) : tagName;

        return (
            <div>
                <div className='section-header'>
                    {tagName}
                    <div className={`underline ${this.props.color}`}></div>
                </div>
                <div className='articles'>
                    {this.getArticles()}
                </div>
            </div>
        );
    }
}

export default TagNews;