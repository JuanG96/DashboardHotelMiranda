import styled, { css } from "styled-components"
import { useDispatch } from "react-redux";
import { filterByRoomAction, fetchRoomAction, fetchConciergeAction, filterByConciergeAction } from "./redux/actions";


const OrderSelect = styled.select`
    width: 134px;
    height: 48px;
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

function OrderBy(props) {

    const dispatch = useDispatch()
    
    const filterBy = () => {
        let filterValue = document.getElementById('filter-select').value
        
        if (props.compo === "Rooms") {
            dispatch(fetchRoomAction())
            if (filterValue === "All") {
                dispatch(fetchRoomAction())
            } else {
                dispatch(filterByRoomAction(filterValue))
            }
        }
        if (props.compo === "Concierge") {
            dispatch(fetchConciergeAction())
            if (filterValue === "All") {
                dispatch(fetchConciergeAction())
            } else {
                dispatch(filterByConciergeAction(filterValue))
            }
        }
    }

    return (
        <>
            <OrderSelect id="filter-select" onChange={() => filterBy()}>
                <option hidden>{props.placeholder}</option>
                {props.options.map((element, index) => 
                    <option key={index}>{element}</option>
                )}
            </OrderSelect>
        </>
    )
}

export { OrderBy }