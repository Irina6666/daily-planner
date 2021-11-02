import React from 'react'
import ButtonUpDate from './ButtonUpDate'
import './PickersBody.css'

function PickersBodyDayTable(props) {
    return <tr className='list'>
        <td width='6%'>{props.time}</td>
        <td width='27%'>{props.event}</td>
		<td>{props.coment}</td>
		<ButtonUpDate />
	</tr>
} 
export default PickersBodyDayTable;   