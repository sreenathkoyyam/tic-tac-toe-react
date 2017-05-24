import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action){

switch (action.type){
case types.LOARD_AUTHORS_SUCCESS:
//debugger; 
// puting user course action value in state and returning
    return  action.authors;
default:
return state;


}
}