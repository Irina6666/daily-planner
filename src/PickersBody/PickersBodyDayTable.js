import React from 'react'
import ButtonDelete from './ButtonDelete';
import ButtonUpDate from './ButtonUpDate'
import './TableStyle.css'

function PickersBodyDayTable(props) {
    return <tr className='list'>
        <td className='head-colomn-time line'>{props.time}</td>
        <td className='head-colomn-event line'>{props.event}</td>
		<td className='line'>{props.coment}</td>
		<ButtonUpDate />
		<ButtonDelete />

	</tr>
} 
export default PickersBodyDayTable;     