import {
    useParams,
    useHistory
} from "react-router-dom";

function Room() {
    const history = useHistory()
    let { id } = useParams();

    return (
        <>
            <button onClick={
                () => {
                    history.push("/rooms")
                }
            }>Back</button>

            <h1>{ id }</h1>
        </>
    )
}

export { Room }