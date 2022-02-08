import styled, { css } from "styled-components"

const NewButton = styled.button`
    width: 213px;
    height: 49px;
    border-radius: 12px;
    border: none;
    text-align: center;
    font: normal normal medium 16px/25px Poppins;
    letter-spacing: 0px;
    margin-right: 20px;
    &:hover{
        cursor: pointer;
    }
    ${props => props.request === "" && css`
        border: 1px solid #799283;
        color: #799283;
        font-size: 16px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
    `}
    ${props => props.request !== "" && css`
        color: #212121;
        font-size: 16px;
        background: #EEF9F2 0% 0% no-repeat padding-box;
    `}
`

function RequestButton(props) {

    
    return (
        <>
            <NewButton data-testid="button-element" request={props.request}>View Notes</NewButton>

        </>
    )
}

export { RequestButton }