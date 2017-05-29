import * as types from './actionTypes';
// for mock api
import AuthorApi from '../api/mockAuthorApi';
export function loadAuthorsSuccess(authors)
{
    //debugger ;  
    //    LOARD authors FN
    return { type: types.LOAD_AUTHORS_SUCCESS, authors};
}

// for loading author using async call
export function loadAuthors(){
//for calling node api
// return fetch(`http://localhost:8000/api/users/`)
//   .then(response => response.json())

    return function(dispatch){
        return AuthorApi.getAllAuthors().then(authors =>{

            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}