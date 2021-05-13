import React, { Component } from 'react';

import '../style/Post.css'

class Post extends Component {
    state = { 
        posts:[]
     }
     async componentDidMount(){
         const url = `https://fakestoreapi.com/products/${this.props.match.params.id}`
         const res= await fetch(url)
         const data= await res.json()
         this.setState({posts: data})
         console.log(this.state.posts)
     }
    render() { 
        return (  
            <div  className="p-7 m-5">
                <div className="matn">
                <h3>{this.state.posts.title}</h3>
                {this.state.posts.description}

                </div>

                <div className="line">
                    <img className="postimage" src={this.state.posts.image} alt={this.state.posts.id}/>
                  <div className="button">
                     <button type="button" class="btn btn-primary m-5">add to Card</button>
                     <button type="button" class="btn btn-light"><h6>price</h6>:{this.state.posts.price}$</button>
                    </div>  
                </div>

            </div>
        );
    }
}
 
export default Post;