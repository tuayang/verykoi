import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../store/actions/postActions'

class CreatePost extends Component {
    state = {
        title: '',
        content: ''
    }

    // function for when a user changes an input field

    handleChange = (e) => {
        this.setState({
         [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault(); //prevents page from reloading
        // console.log(this.state)
        this.props.createPost(this.state)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Create</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}
export default connect(null, mapDispatchToProps)(CreatePost)
