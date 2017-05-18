import {createStore} from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState){
    //creating store and setting  default
return createStore(
rootReducer,
initialState
);
}