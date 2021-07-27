import styled, { css } from "styled-components"

function NewBooking() {

    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
        ${props => props.primary && css`
            color: blue;
        `}
        ${props => props.secondary && css`
            color: green;
        `}
        ${props => props.asd && css`
            font-size: 50px;
        `}
        `;

    return (
        <>
            <Title>NewBooking</Title>
        </>
    )
}

export { NewBooking }