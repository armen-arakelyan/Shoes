import {combineReducers} from 'redux';
import basketReducer from './basket/reducer';

const rootReducer=combineReducers({
    count:basketReducer
})

export default rootReducer