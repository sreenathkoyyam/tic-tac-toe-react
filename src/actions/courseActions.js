import * as types from './actionTypes';
// for mock api
import courseApi from '../api/mockCourseApi';
export function loadCourseSuccess(courses)
{
    //debugger ;  
    //  creatting course Action
    return { type: types.LOARD_COURSES_SUCCESS, courses};
}

// for loading course using async call
export function loardCourses(){

    return function(dispatch){
        return courseApi.getAllCourses().then(courses =>{

            dispatch(loadCourseSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}