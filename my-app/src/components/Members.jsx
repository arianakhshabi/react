import React, { Component } from 'react';
import '../style/signup.css'
import {useDispatch} from 'react-redux'
import {dislike,like}from '../redux/duck/counter'

const Vote =(props)=> {

      const[Votes,setVotes]=React.useState(0)
      const dispatch=useDispatch()

      const likehandler=()=>{
          dispatch(like())
          setVotes(Votes+1)
      }
      const dislikehandler=()=>{
        dispatch(dislike())
        setVotes(Votes-1)
       }
        return (
            
             <div >
             <h1>Number of Members is:{vote}</h1>
         <div className="signup">
             <div className="inputs">

             <p>Enter your Usre Name:</p>
             
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
 
export default Vote;