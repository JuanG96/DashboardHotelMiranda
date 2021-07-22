import rooms from "../jsons/rooms.json"

const counterReducer = (state = rooms, action) => {
    if (action.type === "ADD_ROOM") {
        return [...state, action.payload]
    } else if (action.type === "DELETE_ROOM") {
        return state.filter(element => element.id !== action.payload)
    }
    return state
}

export default counterReducer