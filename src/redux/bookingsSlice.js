import bookings from "../jsons/bookings.json"

const modifyBookings = (state = bookings, action) => {
    switch (action.type) {
        case "ADD_BOOKING":
            return [...state, action.payload]
        case "FETCH_BOOKING":
            return bookings
        case "DELETE_BOOKING":
            return state.filter(element => element.id !== action.payload)
        case "FILTER_BOOKING":
            return [...state.filter(element => element.status === action.payload)]
        default:
            return state


    }
}

export default modifyBookings