import React from 'react';
import { Link } from 'react-router-dom';
import './tag.css';

class Tag extends React.Component {
    render() {
        return (
            <Link to={ 
                    {
                        pathname: `/${this.props.country}/tags/${this.props.tag.toLowerCase()}`,
                        articles: this.props.articles
                    }
                } 
                params={{color: this.props.color}} className='link'>
                <div className={`tag ${this.props.color}`}>
                    <span className='text'>{this.props.name}</span>
                </div>
            </Link>
        );
    }
}
  
export default Tag;