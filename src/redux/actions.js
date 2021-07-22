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

