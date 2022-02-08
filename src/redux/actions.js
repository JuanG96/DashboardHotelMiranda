//      -------ROOMS-------

export const fetchRoomAction = () => {
    return {
        type: 'FETCH_ROOM'
    }
}


export const addRoomAction = (pNewRoom) => {
    return {
        type: 'ADD_ROOM',
        payload: pNewRoom,
    }
}

export const deleteRoomAction = (pId) => {
    return {
        type: 'DELETE_ROOM',
        payload: pId
    }
}

export const filterByRoomAction = (pStatus) => {
    return {
        type: 'FILTER_ROOM',
        payload: pStatus
    }
}

//      -------CONCIERGE------- 

export const fetchConciergeAction = () => {
    return {
        type: 'FETCH_CONCIERGE'
    }
}


export const addConciergeAction = (pNewConcierge) => {
    return {
        type: 'ADD_CONCIERGE',
        payload: pNewConcierge,
    }
}

export const deleteConciergeAction = (pId) => {
    return {
        type: 'DELETE_CONCIERGE',
        payload: pId
    }
}

export const filterByConciergeAction = (pStatus) => {
    return {
        type: 'FILTER_CONCIERGE',
        payload: pStatus
    }
}

//      -------BOOKINGS------- 

export const fetchBookingsAction = () => {
    return {
        type: 'FETCH_BOOKING'
    }
}


export const addBookingsAction = (pNewBookings) => {
    return {
        type: 'ADD_BOOKING',
        payload: pNewBookings,
    }
}

export const deleteBookingsAction = (pId) => {
    return {
        type: 'DELETE_BOOKING',
        payload: pId
    }
}

export const filterByBookingsAction = (pStatus) => {
    return {
        type: 'FILTER_BOOKING',
        payload: pStatus
    }
}

export const filterByDateBookingsAction = (pDateIn, pDateOut) => {
    return {
        type: 'FILTER_DATE_BOOKING',
        payload: [ pDateIn, pDateOut ]
    }
}