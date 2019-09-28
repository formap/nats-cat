import React from 'react';
import Article from '../Article/index';
import './tagNews.css';

class TagNews extends React.Component {
    state = {
        articles:  []
    };

    componentDidMount() {
        this.getArticles();
    }

    getArticles() {
        if (this.props.location.articles === undefined) {
            const tag = this.props.match.params.tag;
            fetch(`http://10.10.72.89:8080/articlesTagged?country=${this.props.match.params.country}`)
                .then((data) => data.json())
                .then((res) => {
                    for (let [key, articlesApi] of Object.entries(res)) {
                        if (key.toLowerCase() === tag) {
                            this.setState({ articles: articlesApi });
                        }
                    }
                });
        } else {
            this.setState({ articles: this.props.location.articles });
        }
    }

    render() {
        let tagName = this.props.match.params.tag;
        tagName = !!tagName ? tagName.charAt(0).toUpperCase() + tagName.substring(1) : tagName;

        return (
            <div className='tagNews'>
                <div className='header'>
                    <div className='icon left' onClick={() => this.props.history.goBack()}>
                        <img src='/icons/back.svg' alt='Back Icon' />
                    </div>
                    <div className='section-header'>
                        {tagName}
                    </div>
                </div>
                <div className='articles'>
                    {this.state.articles.map((article, key) => <Article key={key} image={article.img} headline={article.title} url={article.url} />)}
                </div>
            </div>
        );
    }
}

export default TagNews;