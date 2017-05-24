import {createStore ,applyMiddleware ,compose } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState){
    //creating store and setting  default
return createStore(
rootReducer,
initialState,
//passing a middleware using apply middleware function
applyMiddleware(thunk,reduxImmutableStateInvariant())
);
}