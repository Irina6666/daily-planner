import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './PickersBody.css'



export default props => (
	<tr className='list'>
		<td className='col s12'></td>
        <td className='col s2'>{props.time}</td>
		<td className='col s2'>{props.eventMon}</td>
		<td className='col s2'>{props.eventTue}</td>
		<td className='col s2'>{props.eventWed}</td>
		<td className='col s2'>{props.eventThu}</td>
		<td className='col s2'>{props.eventFrid}</td>
	</tr>		
)
