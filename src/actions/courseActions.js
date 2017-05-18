import * as types from './actionTypes';

export function createCourse(course)
{
    //debugger ;  
    //  creatting course Action
    return { type: types.CREATE_COURSE, course};
}