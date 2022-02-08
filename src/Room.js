import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Room() {
    const history = useHistory()
    const allRooms = useSelector(state => state.rooms)
    let { id } = useParams();
    let room
    allRooms.map(element => {
        if (element.id == id) {
            room = element
        }
    })
    return (
        <>
            <button onClick={
                () => {
                    history.push("/rooms")
                }
            }>Back</button>

            <h1>{ room.name }</h1>
        </>
    )
}

export { Room }