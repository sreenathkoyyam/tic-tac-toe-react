import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action){

switch (action.type){
case types.CREATE_COURSE:
//debugger; puting user action value in state and returning
    return [...state ,
    Object.assign({} , action.course)
    ];
default:
return state;


}
}