import React from 'react'
import Button from './ButtonUpDate'
import './PickersBody.css'

export default props => (
    <tr className='list'>
        <td width='6%'>{props.time}</td>
        <td width='27%'>{props.event}</td>
		<td>{props.coment}</td>
		<Button />
	</tr>
)
 


