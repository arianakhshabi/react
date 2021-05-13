import React, { Component } from 'react';
import '../style/Navbar.css'

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                  JackShop
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                  <a class="nav-link" href="/shop">Shop</a>
                  <a class="nav-link" href="/about">About</a>
                  <a class="nav-link" href="/signup">Signup</a>
                </div>
              </div>
            </div>
          </nav>

        );
    }
}
 
export default Navbar;