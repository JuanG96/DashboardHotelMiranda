import styled from "styled-components"
import concierge from "./jsons/concierge.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";
import { StatusButton } from "./StatusButton";
import { NewDataButton } from "./NewDataButton";
import { OrderBy } from "./OrderBy";
import { useSelector, useDispatch } from "react-redux";
import { deleteConciergeAction, fetchConciergeAction, filterByConciergeAction } from "./redux/actions";



const ContainerRooms = styled.div`
    background-color: #F8F8F8;
    width: 90%;
`

const HeaderRooms = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`

const TabsRooms = styled.div`
    margin: 20px 0 0 10px;
    display: flex;
    justify-content: flex-start;
    border-bottom: #6E6E6E solid 1px;
    align-items: center;
    a{
        font-size: 16px;
        text-decoration: none;
        text-align: right;
        font-weight: bold;
        font: normal normal medium 16px/25px Poppins;
        letter-spacing: 0px;
        color: #6E6E6E;
        border-bottom: transparent solid 1px;
        padding: 10px;
        &:hover{
            color: #135846;
            border-bottom: #135846 solid 3px;
            margin-bottom: -2px;
            cursor: pointer;
        }
    }
`

const ButtonsRooms = styled.div`

`

const TableRooms = styled.table`
    width:100%;
`

const TrRooms = styled.tr`
    height: 90px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 20px;
    transition: transform .6s;
    border-bottom: transparent solid 2px;
    &:hover{
        transform: scale(1.02)
    }
`

const TrRoomsHeader = styled.tr`
    height: 65px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 20px;
    border-bottom: transparent solid 3px
`

const TdRooms = styled.td`
    text-align: center;
    vertical-align: middle;
    #delete-button{
        border:none;
        background-color: transparent;
    }
    
`

const ThRooms = styled.th`
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    &.options{
        width: 60px;
    }
`
function Concierge() {
    const allEmployees = useSelector(state => state.concierge)
    console.log(allEmployees);
    const dispatch = useDispatch()
    dispatch(fetchConciergeAction())

    let history = useHistory()
    let orderArr = ['All', 'Active', 'Inactive']


    const clickedRow = (pId) => {

        history.push("/employee/" + pId)
    }

    const filterBy = (e, pFilter) => {
        e.preventDefault()
        dispatch(fetchConciergeAction())
        switch (pFilter) {
            case 'Active':
                return dispatch(filterByConciergeAction(pFilter));
            case 'Inactive':
                return dispatch(filterByConciergeAction(pFilter));
            default:
                return dispatch(fetchConciergeAction())
            }
    }

    return (
        <ContainerRooms>
            <HeaderRooms>
                <TabsRooms>
                    <a onClick={(e) => filterBy(e, 'All')}>All employees</a>
                    <a onClick={(e) => filterBy(e, 'Active')}>Active employees</a>
                    <a onClick={(e) => filterBy(e, 'Inactive')}>Inactive employees</a>
                </TabsRooms>
                <ButtonsRooms>
                    <NewDataButton buttonName="New" compo="concierge" value="+ New employee" ></NewDataButton>
                    <OrderBy options={orderArr} placeholder="Newest" compo="Concierge"/>
                </ButtonsRooms>
            </HeaderRooms>

            <TableRooms>
                <thead>

                    <TrRoomsHeader>
                        <ThRooms>Photo</ThRooms>
                        <ThRooms>Name</ThRooms>
                        <ThRooms>Employee ID</ThRooms>
                        <ThRooms>Discharge date</ThRooms>
                        <ThRooms>Job</ThRooms>
                        <ThRooms>Phone</ThRooms>
                        <ThRooms>Status</ThRooms>
                        <ThRooms className="options"></ThRooms>
                    </TrRoomsHeader>
                </thead>
                <tbody>
                    {allEmployees.map((element, index) =>
                        <TrRooms key={index}>
                            <TdRooms onClick={() => clickedRow(element.id)}>Photo</TdRooms>
                            <TdRooms onClick={() => clickedRow(element.id)}>{element.name}</TdRooms>
                            <TdRooms onClick={() => clickedRow(element.id)}>{element.id}</TdRooms>
                            <TdRooms onClick={() => clickedRow(element.id)}>{element.dischargeDate}</TdRooms>
                            <TdRooms onClick={() => clickedRow(element.id)}>{element.jobDesc}</TdRooms>
                            <TdRooms onClick={() => clickedRow(element.id)}>{element.phone}</TdRooms>
                            <TdRooms >
                                <StatusButton buttonName={element.status} compo="concierge"></StatusButton>
                            </TdRooms>
                            <TdRooms>
                                <button id="delete-button" onClick={() => dispatch(deleteConciergeAction(element.id))}>
                                    <FontAwesomeIcon icon={faEllipsisV} />
                                </button>
                            </TdRooms>

                        </TrRooms>
                    )}
                </tbody>

            </TableRooms>

        </ContainerRooms>
    )
}

export { Concierge }