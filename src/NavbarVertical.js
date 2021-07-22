import { NavLink } from "react-router-dom";
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser, faTh, faCalendarCheck, faConciergeBell, faHotel } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";

const VerticalDiv = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 5px 5px 40px #00000010;
    width: 15vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    `;

const VerticalUl = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li{
        width: 50%;
        background-color: white;
        margin-bottom: 15px;
        height: 65px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .icons{
        color: #799283;
    }
    `;

const VerticalLi = styled(NavLink)`
    color: #799283;
    text-decoration: none;
    margin-left: 30px;
`;

const Logo = styled.div`
    text-align: left;
    margin: 30px 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        font-size:40px;
        font-weight: 600;
    }
    p{
        font-size: 12px;
        color: #5D5449;
    }
    .logoHotel{
        color: #135846 ;
        font-size: 40px;
        margin-right: 15px;
    }
`;


const CardDiv = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 20px 50px #00000050;
    border-radius: 18px;
    width: 70%;
    margin: 50px 0;
    display: flex;
    align-items: center;
    flex-direction: column;

    div{
        box-sizing: content-box;
        width: 70px;
        height: 70px;
        background: #C5C5C5 0% 0% no-repeat padding-box;
        border-radius: 8px;
        position: relative;
        top: -35px;
    }
    h2{
        font-size: 16px;
        font: normal normal medium 16px/25px Poppins;
        letter-spacing: 0px;
        color: #393939;
        margin-bottom: 5px;
    }
    h3{
        font-size: 12px;
        letter-spacing: 0px;
        color: #B2B2B2;
        font: normal normal 300 12px/18px Poppins;
        margin-bottom: 10px;
    }
    button{
        background: #EBF1EF 0% 0% no-repeat padding-box;
        border-radius: 8px;
        font: normal normal 600 14px/21px Poppins;
        letter-spacing: 0px;
        color: #135846;
        width: 40%;
        margin-bottom: 15px;
    }
`;
function NavbarVertical(props) {

    let history = useHistory()
    const value = props.value;


    if (value) {
        return (
            <>

                <VerticalDiv>
                    <Logo>
                        <div>
                            <FontAwesomeIcon icon={faHotel} className="logoHotel" />
                        </div>
                        <div>
                            <h1>travl</h1>
                            <p>Hotel Admin Dashboard</p>
                        </div>
                    </Logo>
                    <VerticalUl>
                        <li>
                            <FontAwesomeIcon icon={faTh} className="icons" />
                            <VerticalLi to="/" id="dashboard"> Dashboard</VerticalLi>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faKey} className="icons"/>
                            <VerticalLi to="rooms" id="rooms"> Rooms</VerticalLi>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCalendarCheck} className="icons"/>
                            <VerticalLi to="bookings" id="bookings"> Bookings</VerticalLi>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faConciergeBell} className="icons"/>
                            <VerticalLi to="concierge" id="concierge"> Concierge</VerticalLi>
                        </li>
                    </VerticalUl>

                    <CardDiv>
                        <div>
                            
                        </div>
                        <h2>William Johanson</h2>
                        <h3>williamjohn@mail.com</h3>
                        <button>Edit</button>
                    </CardDiv>

                    <button onClick={
                        () => {
                            localStorage.removeItem('authenticated')
                            window.location.reload()
                            history.push("/")
                        }
                    }>Log out</button>
                </VerticalDiv>

            </>
        )
    } else {
        return (
            <>
                <VerticalDiv>
                    <Logo>
                        <div>
                            <FontAwesomeIcon icon={faHotel} className="logoHotel" />
                        </div>
                        <div>
                            <h1>travl</h1>
                            <p>Hotel Admin Dashboard</p>
                        </div>
                    </Logo>
                    <VerticalUl>
                        <li>
                            <FontAwesomeIcon icon={faTh} />
                            <VerticalLi to="/login" data-testid="login-element">Login</VerticalLi>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faTh} />
                            <VerticalLi to="/register" data-testid="register-element" id="register-button-nav">Register</VerticalLi>
                        </li>
                    </VerticalUl>
                </VerticalDiv>
            </>
        )
    }
}

export { NavbarVertical }