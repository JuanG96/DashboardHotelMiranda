import styled, { css } from "styled-components"

const NewButton = styled.button`
    width: 213px;
    height: 49px;
    border-radius: 12px;
    border: none;
    text-align: center;
    font: normal normal medium 16px/25px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    margin-right: 20px;
    background: #135846 0% 0% no-repeat padding-box;
    &:hover{
        cursor: pointer;
    }
`

function NewBooking(props) {

    return (
        <>
            <NewButton data-testid="button-element" >{props.value}</NewButton>

        </>
    )
}

export { NewBooking }