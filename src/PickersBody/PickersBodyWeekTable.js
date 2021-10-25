import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './PickersBody.css'

export default props => (
	<tr className='list'>
        <td >{props.time}</td>
		<td >{props.eventMon}</td>
		<td >{props.eventTue}</td>
		<td >{props.eventWed}</td>
		<td >{props.eventThu}</td>
		<td >{props.eventFrid}</td>
		<td >{props.eventSat}</td>
		<td >{props.eventSun}</td>
	</tr>	 	
)

