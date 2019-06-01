import React from 'react'
import BlogList from './BlogList';

const PostSummary = ({blog}) => {
    return (
        <div className="card z-depth-0 post-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{blog.title}</span>
                <p>Posted by Master T</p>
                <p className="grey-text">1 June, 2pm</p>
            </div>
        </div>
    )
}

export default PostSummary