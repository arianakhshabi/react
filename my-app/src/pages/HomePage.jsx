import React, { Component } from 'react';
import '../App.css'
import '../style/homePage.css'

import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';

import Layer from '../components/Layer'

class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>

                
                <h1 >
                    Welcome to Jack Shop
                </h1>
                <ImageSlider slides={SliderData}/>
                <hr />
                <div>
                    <p>dsfsdf</p>
                </div>
                
            </React.Fragment>
            
        );
    }
}
 
export default HomePage;