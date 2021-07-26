import modifyRooms from './roomsSlice';
import { combineReducers } from 'redux';
import modifyConcierge from './conciergeSlice';

const allReducers = combineReducers({
    rooms: modifyRooms,
    concierge: modifyConcierge
})

export default allReducers