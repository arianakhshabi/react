import{createStore , combineReducers}from 'redux'

import voteRediucer from './duck/counter'

const reducer=combineReducers({
    voter: voteRediucer
})
const store =createStore(reducer);

export default store;