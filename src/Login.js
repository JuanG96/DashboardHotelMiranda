import { useEffect } from "react";
import {
    useHistory
} from "react-router-dom";
import styled from "styled-components"

const LoginDiv = styled.div`
    background-color: #FFFFFF;
    box-shadow: 7px 7px 20px #000020;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    h1{
        margin-bottom: 30px;
        font-size: 40px;
    }
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
        border-radius: 5px;
        height: 20px;
        margin-bottom: 10px;
    }
    label{
        font-size: 20px;
        margin-bottom: 10px;
    }
    button{
        width: 100%;
        height: 49px;
        border-radius: 12px;
        border: none;
        margin-top: 10px;
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

function Login(props) {
    let history = useHistory()
    const loginUsers = [
        {
            'email': 'admin@admin.com',
            'pass': 'admin'
        },
        {
            'email': 'pedro@gmail.com',
            'pass': 'deltoro'
        },
    ]

    useEffect(() => {
        if (props.authenticated) {
            history.push("/")
        }
    }, [props.authenticated])

    let loginSubmit = (e) => {
        e.preventDefault()
        let passInput = document.getElementById('passwordInput')
        let userInput = document.getElementById('emailInput')

        // loginUsers.map(element => {
            for (let i = 0; i < loginUsers.length; i++){

                if (passInput.value === loginUsers[i].pass && userInput.value === loginUsers[i].email) {
                    props.authenticate(true)
                    break;
                } else {
                    alert("Error")
                    break;
                }
            }
        // })
    }
    
    return (
        <>
            <LoginDiv>

                <h1>Login</h1>
                <LoginForm onSubmit={(e) => loginSubmit(e)}>
                    <label>Email</label>
                    <input id="emailInput" type="email"></input>
                    <label>Password</label>
                    <input id="passwordInput" type="password"></input>
                    <button id="login-button" >Log in</button>
                </LoginForm>
            </LoginDiv>

        </>
    )
}

export { Login }