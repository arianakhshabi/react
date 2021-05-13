import React, { Component } from 'react';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

import {Link} from 'react-router-dom'

class PostCard extends Component {
    state = {  }
    render() { 
        return (  
            <div class="card p-2 " >
            <img src={this.props.image} class="name" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{this.props.title}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to={`/shop/${this.props.id}`} className='card-link'> See More</Link>
              <button type="button" class="btn btn-light price">{this.props.price}$</button>
            </div>
          </div>
        );
    }
}
 
export default PostCard;