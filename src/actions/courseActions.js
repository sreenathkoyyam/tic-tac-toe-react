import * as types from './actionTypes';
// for mock api
import courseApi from '../api/mockCourseApi';
export function loadCourseSuccess(courses)
{
    //debugger ;  
    //  creatting course Action
    return { type: types.LOAD_COURSES_SUCCESS, courses};
}

// for loading course using async call
export function loadCourses(){

    return function(dispatch){
        return courseApi.getAllCourses()
        .then(courses =>{
            dispatch(loadCourseSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}
//redux-promis
export function createCourseSuccess(courses){
    return {type: types.CREATE_COURSES_SUCCESS , courses}
}
export function updateCourseSuccess(courses){
    return {type: types.UPDATE_COURSES_SUCCESS , courses}
}
// saving course data
export function saveCourse(course)
{
return function(dispatch,getState){
    return courseApi.saveCourse(course)
    .then(saveCourse=>{
        course.id ? dispatch(updateCourseSuccess(saveCourse)) : dispatch(createCourseSuccess(saveCourse));
    });
};

}