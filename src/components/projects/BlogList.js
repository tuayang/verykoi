import React from 'react'
import PostSummary from './PostSummary'

const BlogList = ({blogs}) => {
    return (
        <div className="blog-list section">
           
            { blogs && blogs.map(blog => {
                return (
                    <PostSummary blog={blog} key={blog.id} />
                )
            })}
        </div>
    )
}

export default BlogList