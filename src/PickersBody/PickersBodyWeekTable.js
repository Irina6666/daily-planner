import React from 'react'
import './PickersBody.css'

function PickersBodyWeekTable(props) {
    return <tr className='list'>
        <td>{props.time}</td>
        <td>{props.eventMon}</td>
        <td>{props.eventTue}</td>
        <td>{props.eventWed}</td>
        <td>{props.eventThu}</td>
        <td>{props.eventFrid}</td>
        <td>{props.eventSat}</td>
        <td>{props.eventSun}</td>
    </tr>;
}
export default PickersBodyWeekTable; 
