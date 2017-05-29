import * as types from '../actions/actionTypes';
//for accessing initial state of stores
import initialState from './initialState';

//reducer will take 2 parametter action and current state.and will return new state
export default function courseReducer(state = initialState.courses, action){

switch (action.type){
case types.LOAD_COURSES_SUCCESS:
//debugger; 
// puting user course action value in state and returning new state
    return  action.courses;

    case types.CREATE_COURSES_SUCCESS:
// es6 spred operator used . object.assign will create a deep copy of course
// puting user course action value in state and returning new state
    return  [...state,Object.assign({},action.courses)];

    case types.UPDATE_COURSES_SUCCESS:
// puting user course action value in state and returning new state
    return  [...state.filter(courses => courses.id !== action.courses.id),
    //assign value of state in to object and returning 
    Object.assign({},action.courses)];
default:
return state;


}
}