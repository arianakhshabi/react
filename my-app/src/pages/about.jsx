import React, { Component , useState } from 'react';

import Vote from '../components/Vote'
import {useSelector} from 'react-redux'

const About = ()=> {
  
  const vote= useSelector((state)=>state.voter.vote)
  
    return ( 
      <div className='p-3'>
        <h3>vote:{vote}</h3>

        <h4>
          student vote:{vote}
        </h4>
        <div>

        <Vote tech='vue'/>
        <Vote tech='python'/>
        </div>
      </div>

     );
  
}
 
export default About;