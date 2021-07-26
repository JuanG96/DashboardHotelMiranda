import concierge from "../jsons/concierge.json"

const modifyConcierge = (state = concierge, action) => {
    switch (action.type) {
        case "ADD_CONCIERGE":
            return [...state, action.payload]
        case "FETCH_CONCIERGE":
            return concierge
        case "DELETE_CONCIERGE":
            return state.filter(element => element.id !== action.payload)
        case "FILTER_CONCIERGE":
            return [...state.filter(element => element.status === action.payload)]
        default:
            return state


    }
}

export default modifyConcierge