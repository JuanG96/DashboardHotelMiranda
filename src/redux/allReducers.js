import counterReducer from './roomsSlice';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer
})

export default allReducers