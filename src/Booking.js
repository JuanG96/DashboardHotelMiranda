import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Booking() {
    const history = useHistory()
    const allBookings = useSelector(state => state.bookings)
    let { id } = useParams();
    let booking
    allBookings.map(element => {
            if (element.id == id) {
            booking = element
        }
    })
    return (
        <>
            <button onClick={
                () => {
                    history.push("/bookings")
                }
            }>Back</button>

            <h1>{ booking.name }</h1>
        </>
    )
}

export { Booking }