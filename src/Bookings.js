import React, { useState, useEffect } from "react";
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";
import { StatusButton } from "./StatusButton";
import { NewDataButton } from "./NewDataButton";
import { RequestButton } from "./RequestButton";
import { OrderBy } from "./OrderBy";
import { useSelector, useDispatch } from "react-redux";
import { deleteRoomAction, fetchBookingsAction, filterByBookingsAction, filterByDateBookingsAction } from "./redux/actions";
import DateRangePicker from '@wojtekmaj/react-daterange-picker'

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
function Bookings() {
    const [value, onChange] = useState([new Date(), new Date()]);
    const allBookings = useSelector(state => state.bookings)
    const dispatch = useDispatch()

    let history = useHistory()
    let orderArr = ['All', 'Available', 'Booked']


    const clickedRow = (pId) => {

        history.push("/booking/" + pId)
    }

    const filterBy = (e, pFilter) => {
        e.preventDefault()
        dispatch(fetchBookingsAction())
        switch (pFilter) {
            case 'Booked':
                return dispatch(filterByBookingsAction(pFilter));
            case 'Pending':
                return dispatch(filterByBookingsAction(pFilter));
            case 'Cancelled':
                return dispatch(filterByBookingsAction(pFilter));
            case 'Refund':
                return dispatch(filterByBookingsAction(pFilter));
            default:
                return dispatch(fetchBookingsAction())
        }
    }

    const checkDate = () => {            
            function pad(s) { return (s < 10) ? '0' + s : s; }
            var d = new Date(value[0])
            let date1 = [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
            
        var da = new Date(value[0])
        let date2 = [pad(da.getDate()), pad(da.getMonth() + 1), da.getFullYear()].join('/')
            dispatch(fetchBookingsAction())
            dispatch(filterByDateBookingsAction(date1, date2))
    }

    return (
        <ContainerRooms>
            <HeaderRooms>
                <TabsRooms>
                    <a onClick={(e) => filterBy(e, 'All')}>All bookings</a>
                    <a onClick={(e) => filterBy(e, 'Booked')}>Booked</a>
                    <a onClick={(e) => filterBy(e, 'Pending')}>Pending</a>
                    <a onClick={(e) => filterBy(e, 'Cancelled')}>Cancelled</a>
                    <a onClick={(e) => filterBy(e, 'Refund')}>Refund</a>
                </TabsRooms>
                <ButtonsRooms>
                    <DateRangePicker onChange={onChange} value={value} />
                    <button onClick={checkDate}>Go!</button>
                    <NewDataButton buttonName="New" compo="bookings" value="+ New booking"></NewDataButton>
                    <OrderBy options={orderArr} placeholder="Newest" compo="Rooms" />
                </ButtonsRooms>
            </HeaderRooms>

            <TableRooms>
                <thead>

                    <TrRoomsHeader>
                        <ThRooms>Guest</ThRooms>
                        <ThRooms>Order Date</ThRooms>
                        <ThRooms>Check In</ThRooms>
                        <ThRooms>Check Out</ThRooms>
                        <ThRooms>Special Request</ThRooms>
                        <ThRooms>Room Type</ThRooms>
                        <ThRooms>Status</ThRooms>
                        <ThRooms className="options"></ThRooms>
                    </TrRoomsHeader>
                </thead>
                <tbody>
                    {allBookings.map((element, index) =>
                        <TrRooms key={index}>
                            <TdRooms onClick={() => clickedRow(element.id)}>{element.name}</TdRooms>
                            <TdRooms onClick={() => clickedRow(element.id)}>{element.order}</TdRooms>
                            <TdRooms onClick={() => clickedRow(element.id)}>{element.checkIn}</TdRooms>
                            <TdRooms onClick={() => clickedRow(element.id)}>{element.checkOut}</TdRooms>
                            <TdRooms onClick={() => clickedRow(element.id)}>
                                <RequestButton request={element.request}></RequestButton>
                            </TdRooms>
                            <TdRooms onClick={() => clickedRow(element.id)}>{element.roomType}</TdRooms>
                            <TdRooms >
                                <StatusButton buttonName={element.status} compo="bookings"></StatusButton>
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

export { Bookings }