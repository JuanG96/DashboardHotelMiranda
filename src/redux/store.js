import { configureStore } from '@reduxjs/toolkit'
import modifyConcierge from './conciergeSlice'
import modifyRooms from './roomsSlice'

export default configureStore({
    reducer: {
        rooms: modifyRooms,
        concierge: modifyConcierge
    }
})