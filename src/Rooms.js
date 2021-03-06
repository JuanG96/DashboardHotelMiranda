import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";
import { StatusButton } from "./StatusButton";
import { NewDataButton } from "./NewDataButton";
import { OrderBy } from "./OrderBy";
import { useSelector, useDispatch } from "react-redux";
import { deleteRoomAction, fetchRoomAction, filterByRoomAction } from "./redux/actions";


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
function Rooms() {

    const allRooms = useSelector(state => state.rooms)
    const dispatch = useDispatch()

    let history = useHistory()
    let orderArr = ['All', 'Available', 'Booked']


    const clickedRow = (pId) => {

        history.push("/room/" + pId)
    }


    const allFilter = (e) => {
        e.preventDefault()
        dispatch(fetchRoomAction())
    }

    const availableFilter = (e) => {
        e.preventDefault()
        dispatch(fetchRoomAction())
        dispatch(filterByRoomAction('Available'))
    }

    const bookedFilter = (e) => {
        e.preventDefault()
        dispatch(fetchRoomAction())
        dispatch(filterByRoomAction('Booked'))
    }

    return (
        <ContainerRooms>
                <HeaderRooms>
                    <TabsRooms>
                        <a onClick={(e) => allFilter(e)}>All rooms</a>
                        <a onClick={(e) => availableFilter(e)}>Available rooms</a>
                        <a onClick={(e) => bookedFilter(e)}>Booked rooms</a>
                    </TabsRooms>
                <ButtonsRooms>
                        <NewDataButton buttonName="New" compo="rooms" value="+ New room"></NewDataButton>
                        <OrderBy options={orderArr} placeholder="Newest" compo="Rooms"/>
                    </ButtonsRooms>
                </HeaderRooms>
            
            <TableRooms>
                <thead>

                <TrRoomsHeader>
                    <ThRooms>Room Name</ThRooms>
                    <ThRooms>Bed Type</ThRooms>
                    <ThRooms>Room Floor</ThRooms>
                    <ThRooms>Facilities</ThRooms>
                    <ThRooms>Rate</ThRooms>
                    <ThRooms>Status</ThRooms>
                    <ThRooms className="options"></ThRooms>
                    </TrRoomsHeader>
                </thead>
                <tbody>
                    {allRooms.map((element, index) =>
                    <TrRooms key={index}>
                        <TdRooms onClick={() => clickedRow(element.id)}>{element.name}</TdRooms>
                        <TdRooms onClick={() => clickedRow(element.id)}>{element.bedType}</TdRooms>
                        <TdRooms onClick={() => clickedRow(element.id)}>{element.floor}</TdRooms>
                        <TdRooms onClick={() => clickedRow(element.id)}>Facilities</TdRooms>
                        <TdRooms onClick={() => clickedRow(element.id)}><b>{element.rate}</b>/night</TdRooms>
                        <TdRooms >
                            <StatusButton buttonName={element.status} compo="rooms"></StatusButton>
                        </TdRooms>
                        <TdRooms>
                            <button id="delete-button" onClick={() => dispatch(deleteRoomAction(element.id))}>
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

export { Rooms }