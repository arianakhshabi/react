import React, { Component } from 'react';
import PostCard from '../components/PostCard'
import '../style/shop.css'

class Shop extends Component {
    state = { 
        posts:[]
     }
     async componentDidMount(){
         const url = 'https://fakestoreapi.com/products'
         const res= await fetch(url)
         const data= await res.json()
         this.setState({posts: data})
         console.log(this.state.posts)
     }
    render() { 
        return (  
            <div>

                {this.state.posts.map((p)=>(
                  <div key={p.id}>
                      <PostCard
                      image={p.image}
                      title={p.title}
                      id={p.id}
                      price={p.price}
                      description={p.description}
                      />
                  </div>
                ))};
            
            </div>
        );
    }
}
 
export default Shop;