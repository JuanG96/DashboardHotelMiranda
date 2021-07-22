import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function KPIs(props) {
    const KPIsDiv = styled.div`
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 5px 5px 5px #00000015;
        border-radius: 12px;
        width: 15%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 15px 0 15px 30px;
    `;

    const LogoDiv = styled.div`
        width: 65px;
        height: 65px;
        background: #FFEDEC 0% 0% no-repeat padding-box;
        border-radius: 8px;
        margin-right: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        :first-child{
            color: #E23428;
            font-size: 25px;
        }
    `;
    const DataDiv = styled.div`
    h1{
        text-align: left;
        font: normal normal 600 30px/46px Poppins;
        letter-spacing: 0px;
        color: #393939;
        font-size: 30px;
    }
    h2{
        text-align: left;
        font: normal normal 300 14px/21px Poppins;
        letter-spacing: 0px;
        color: #787878;
        font-size: 14px;
    }
    `;

    return (
        <>

            <KPIsDiv>
                <LogoDiv>
                    <FontAwesomeIcon icon={props.icon} className="logoHotel" />
                </LogoDiv>
                <DataDiv>
                    <h1>{props.data}</h1>
                    <h2>{props.title}</h2>
                </DataDiv>
            </KPIsDiv>

        </>
    )
}

export { KPIs }