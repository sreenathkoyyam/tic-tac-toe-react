import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action){

switch (action.type){
case types.LOARD_COURSES_SUCCESS:
//debugger; 
// puting user course action value in state and returning
    return  action.courses;
default:
return state;


}
}