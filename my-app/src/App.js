import React from 'react';
import{BrowserRouter as Router, Switch,Route}from 'react-router-dom'


import HomePage from './pages/HomePage'
import About from './pages/about'
import Shop from './pages/ShopingItem'
import Signup from './pages/Signup'


import Layer from './components/Layer'
import Post from './components/Post'

import './App.css';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';

function App() {
  return (
    <Router>
          

                  <Layer>
                          <Switch>
                                <Route path='/' exact component={HomePage} />
                                <Route path='/about' component={About} />
                                <Route path='/Shop'exact component={Shop} />
                                <Route path='/Shop/:id' component={Post} />
                                <Route path='/signup' component={Signup} />
                          </Switch>
                  </Layer>
          
      
    </Router>
  )
}

export default App;
