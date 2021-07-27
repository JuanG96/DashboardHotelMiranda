import modifyRooms from './roomsSlice';
import { combineReducers } from 'redux';
import modifyConcierge from './conciergeSlice';
import modifyBookings from './bookingsSlice';


const allReducers = combineReducers({
    rooms: modifyRooms,
    concierge: modifyConcierge,
    bookings: modifyBookings
})

export default allReducers