//sreenath886: root reducer

import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
//adding new reducers to rootreducer
const rootReducer = combineReducers({

courses ,
authors

});

export default rootReducer;