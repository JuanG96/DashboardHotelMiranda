import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Employee() {
    const history = useHistory()
    const allEmployees = useSelector(state => state.concierge)
    let { id } = useParams();
    let employee
    allEmployees.map(element => {
        if (element.id == id) {
            employee = element
        }
    })

    return (
        <>
            <button onClick={
                () => {
                    history.push("/concierge")
                }
            }>Back</button>

            <h1>{ employee.name }</h1>
        </> 
    )
}

export { Employee }