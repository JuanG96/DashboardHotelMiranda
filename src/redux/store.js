import { configureStore } from '@reduxjs/toolkit'
import modifyConcierge from './conciergeSlice'
import modifyRooms from './roomsSlice'
import modifyBookings from './bookingsSlice'


export default configureStore({
    reducer: {
        rooms: modifyRooms,
        concierge: modifyConcierge,
        bookings: modifyBookings
    }
})