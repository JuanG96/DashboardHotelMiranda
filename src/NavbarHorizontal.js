import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { NavLink } from "react-router-dom";

const GlobalDiv = styled.div`
    background: #FCFCFC 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 10px #00000010;
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.div`
    display: flex;
    margin-left: 20px;
    justify-content: center;
    align-items: center;
    h1{
        text-align: left;
        font: normal normal 600 28px/42px Poppins;
        letter-spacing: 0px;
        color: #262626;
    }
`

const Buttons = styled.div`
    margin:0 50px;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size:26px;
    a{
        color: #135846;
        margin-left: 50px;
    }
`

function NavbarHorizontal() {
    const {} = useParams()
    let path = window.location.pathname.replace('/', '')
    let compoName = path.charAt(0).toUpperCase() + path.slice(1)
    if (compoName === "") {
        compoName = "Dashboard"
    }

    return (
        <>
            <GlobalDiv>

                <Title>
                    <FontAwesomeIcon icon={faBars} />
                    <h1>{compoName}</h1>
                </Title>
                <Buttons>
                    <NavLink to="messages">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </NavLink>
                    <a href="https://www.google.com">
                        <FontAwesomeIcon icon={faBell} />
                    </a>

                </Buttons>
            </GlobalDiv>
        </>
    )
}

export { NavbarHorizontal }