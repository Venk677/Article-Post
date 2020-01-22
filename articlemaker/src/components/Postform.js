import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createPost} from '../actions/postAction';
import PropTypes from 'prop-types';
class Postform extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            body:''
        };
        
        this.onChange =this.onChange.bind(this);
        this.onSubmit =this.onSubmit.bind(this);
    }

    onChange(event){
        this.setState({
            title:event.target.value.title,
            body:event.target.value.body
        }) 
    
    }

    onSubmit(event){ 
        event.preventDefault();

        const post = {
            title :this.state.title,
            body:this.state.body
        }

        this.props.createPost(post);
    }

   
    render() {
        return (
            <div> 
            <h1>Add Post</h1>
            <form onSubmit={this.onSubmit}>
                <div>
                  <label>
                  Title:
                  </label><br />
                  <input type="text" name="title" value={this.state.title} onChange={this.onChange}></input>
                </div>
                <div>
                  <label>
                  Body:
                  </label><br />
                  <textarea type="text" name="body" value={this.state.body} onChange={this.onChange}></textarea>
                </div>
                <br />
                <button type="submit">Submit</button>
            
            </form>

                
            </div>
        )
    }
}

Postform.PropTypes={
    createPost:PropTypes.func.isRequired
};



export default connect(null,{createPost},(Postform));
