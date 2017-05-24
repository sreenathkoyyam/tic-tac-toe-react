import * as types from './actionTypes';
// for mock api
import AuthorApi from '../api/mockCourseApi';
export function loadAuthorsSuccess(authors)
{
    //debugger ;  
    //    LOARD authors FN
    return { type: types.LOARD_AUTHORS_SUCCESS, authors};
}

// for loading author using async call
export function loardAuthors(){

    return function(dispatch){
        return AuthorApi.getAllAuthors().then(authors =>{

            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}