import { useHistory } from "react-router-dom";
import styled from "styled-components"
import { KPIs } from './KPIs'
import { faSignInAlt, faSignOutAlt, faCalendarCheck, faBed } from '@fortawesome/free-solid-svg-icons'


function Dashboard() {
    const DashboardDiv = styled.div`
        background-color:yelow;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        `;
    const KPIsDiv = styled.div`
        display: flex;
        justify-content: space-around;
        align-content: center;
        `;
    return (
        <>
            <DashboardDiv>
                <KPIsDiv>
                    <KPIs title="New Booking" data="8,461" icon={faBed}></KPIs>
                    <KPIs title="Scheduled Room" data="963" icon={faCalendarCheck}></KPIs>
                    <KPIs title="Check In" data="753" icon={faSignInAlt}></KPIs>
                    <KPIs title="Check Out" data="516" icon={faSignOutAlt}></KPIs>
                </KPIsDiv>

            <h1>Dashboard</h1>
            </DashboardDiv>


        </>
    )
}

export { Dashboard }