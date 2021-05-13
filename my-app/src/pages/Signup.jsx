import React, { Component ,setState } from 'react';
import '../style/signup.css'
import Vote from '../components/Vote'
import {useSelector}from 'react-redux'
const Signup =()=> {

    const vote= useSelector((state)=>state.voter.vote)
    
    

       
    
      
        return (
            
            
            <div className='bg'>
                <h1></h1>
            <div className="signup">
                <div className="inputs">

                <p>Enter your Usre Name</p>
                
                <input className='inputbox' type="text" />
                <br/>
                <p>Enter your Email Address:</p>
               
                <input className='inputbox' type="email" />
                <br/>
                <p>Enter your Password:</p>
                
                <input className='inputbox' type="password" />
                </div>
                
                
                <button type="button" className="btn btn-primary b1 " >SignUp</button>
                
                


            </div>
        
            </div>
           
         );
         
        
         
    
    
}
 
export default Signup;