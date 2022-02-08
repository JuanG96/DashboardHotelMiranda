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
        case "FILTER_DATE_BOOKING":

            console.log(action.payload[0]);
            console.log(action.payload[1]);
            console.log(state[0].checkIn);
            console.log(state[0].checkOut);

            return [...state.filter(element => {
                // if (element.checkIn >= action.payload[0]) {
                    if (element.checkOut < action.payload[1]) {
                        return element
                        
                    // }
                }
            })]


        default:
            return state


    }
}

export default modifyBookings