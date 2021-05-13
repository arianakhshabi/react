import React, { Component } from 'react';
 
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
            <div className='card p-3 m-4'>
                <h4>{`vote for${props.tech}|${Votes}students`}</h4>
                <div className='row'>
                    <div className=''>

                <button className='btn btn-info W-50' onClick={likehandler} >Like
                </button>
                    </div>

                    <div className='col-6'>
                <button className='btn btn-danger W-50' onClick={dislikehandler} >Dislike
                </button>

                    </div>

                </div>

            </div>
          );
    
}
 
export default Vote;