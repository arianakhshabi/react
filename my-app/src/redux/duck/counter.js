const LIKE='like';
const DISLIKE='dislike'

export const like =()=>({
    type:LIKE
});
export const dislike =()=>({
    type:DISLIKE
});

const initialstate={
    vote:0,
}

export default (state=initialstate,action)=>{
    switch(action.type){
        case LIKE:
            return{...state,vote:state.vote+1}
        case DISLIKE:
                return{...state,vote:state.vote-1}
        default:
            return state
            
    }

}