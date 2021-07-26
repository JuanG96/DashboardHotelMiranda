import rooms from "../jsons/rooms.json"

const modifyRooms = (state = rooms, action) => {
    switch (action.type) {
        case "ADD_ROOM":
            return [...state, action.payload]
        case "FETCH_ROOM":
            return rooms
        case "DELETE_ROOM":
            return state.filter(element => element.id !== action.payload)
        case "FILTER_ROOM":
            return [...state.filter(element => element.status === action.payload)]
        default:
            return state


    }
}

export default modifyRooms