import React from 'react';
import './tag.css';

class Tag extends React.Component {
    render() {
        return (
            <div className={`tag ${this.props.color}`}>
                <span className='text'>{this.props.name}</span>
            </div>
        );
    }
}
  
export default Tag;