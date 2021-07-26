import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addRoomAction } from "./redux/actions";
import styled from "styled-components"

const NewRoomDiv = styled.div`
    margin-top: 50px;
    background-color: #FFFFFF;
    box-shadow: 7px 7px 20px #000020;
    padding: 30px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        margin-bottom: 20px;
        font-size: 35px;
        font-weight: bold;
    }
`

const NewRoomForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
        border-radius: 5px;
        height: 20px;
        width: 100%;
        margin-bottom: 20px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type=number] {
        -moz-appearance: textfield;
    }
    label{
        font-size: 20px;
        margin-bottom: 5px;
    }
    button{
        width: 100%;
        height: 49px;
        border-radius: 12px;
        border: none;
        margin-top: 20px;
        text-align: center;
        font: normal normal medium 16px/25px Poppins;
        letter-spacing: 0px;
        color: #FFFFFF;
        background: #135846 0% 0% no-repeat padding-box;
        &:focus{
            outline: none;
        }
    }

`

const StatusSelect = styled.select`
    width: 100%;
    height: 35px;
    border: 1px solid #135846;
    border-radius: 12px;
    text-align-last: left;
    padding-left: 30px;
    font: normal normal medium 16px/25px Poppins;
    letter-spacing: 0px;
    color: #135846;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image:
        linear-gradient(45deg, transparent 50%, #135846 50%),
        linear-gradient(135deg, #135846 50%, transparent 50%),
        linear-gradient(to right, #135846, #135846);
    background-position:
        calc(100% - 20px) center,
        calc(100% - 15px) center,
        calc(100% - 2.5em) center;
    background-size:
        5px 5px,
        5px 5px,
        1px 1.5em;
    background-repeat: no-repeat;

    &:focus{
        outline: none;
    }

`



function NewRoom() {
    let history = useHistory()
    const dispatch = useDispatch()

    let newRoomSubmit = (e) => {
        e.preventDefault()
        let nameInput = document.getElementById('nameInput').value
        let bedTypeInput = document.getElementById('bedTypeInput').value
        let floorInput = document.getElementById('floorInput').value
        // let facilitiesInput = document.getElementById('facilitiesInput').value
        let rateInput = document.getElementById('rateInput').value
        let statusSelect = document.getElementById('statusSelect')
        let optionStatus = statusSelect.options[statusSelect.selectedIndex].text
        let newRoom = {
            "id": 11,
            "name": nameInput,
            "bedType": bedTypeInput,
            "floor": floorInput,
            "facilities": [
                {},
                {},
                {},
                {}
            ],
            "rate": rateInput,
            "status": optionStatus
        }

        dispatch(addRoomAction(newRoom))


        history.push("/rooms")

    }
    
    return (
        <>
            <NewRoomDiv>
            <h1>Create room</h1>

                <NewRoomForm onSubmit={(e) => newRoomSubmit(e)}>
                    <label>Name</label>
                    <input id="nameInput" type="text"></input>
                    <label>Bed Type</label>
                    <input id="bedTypeInput" type="text"></input>
                    <label>Floor</label>
                    <input id="floorInput" type="text"></input>
                    <label>Facilities</label>
                    <input id="facilitiesInput" type="text"></input>

                    <label>Rate</label>
                    <input id="rateInput" type="number"></input>

                    <label>Status</label>
                    <StatusSelect id="statusSelect">
                        <option hidden>Status</option>
                        <option>Available</option>
                        <option>Booked</option>
                    </StatusSelect>
                    <button id="submit-room-button" >Create room</button>
                </NewRoomForm>
                
            </NewRoomDiv>


        </>
    )
}

export { NewRoom }