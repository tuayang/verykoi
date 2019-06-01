import React from 'react'

const BlogDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section blog-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Blog Title - {id}</span>
                    <p> Veniam ullamco sint incididunt dolore nulla aliqua excepteur consequat anim cupidatat exercitation amet est. Occaecat nisi ut aliquip labore veniam enim dolor est deserunt irure exercitation duis duis. Officia minim mollit dolor duis consequat et labore qui sit et do aute deserunt. Occaecat adipisicing aliquip culpa cupidatat anim excepteur. Anim sunt cillum do sunt qui anim id id dolor do. Sunt voluptate laboris commodo do exercitation occaecat culpa eu officia. Laborum id ipsum duis officia in consequat excepteur.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Master T</div>
                    <div>1 June, 2pm</div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails