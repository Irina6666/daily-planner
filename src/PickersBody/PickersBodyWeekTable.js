import React from 'react'
import './TableStyle.css'

function PickersBodyWeekTable(props) {
    return <tr className='list'>
        <td className='head-colomn-time line'>{props.time}</td>
        <td className='line'>{props.eventMon}</td>
        <td className='line'>{props.eventTue}</td>
        <td className='line'>{props.eventWed}</td>
        <td className='line'>{props.eventThu}</td>
        <td className='line'>{props.eventFrid}</td>
        <td className='line'>{props.eventSat}</td>
        <td className='line'>{props.eventSun}</td>
    </tr>;
}
export default PickersBodyWeekTable; 
