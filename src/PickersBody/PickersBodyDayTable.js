import React from 'react'

import './PickersBody.css'
// пустые строки лишние


export default props => (
    <tr className='list'>
        <td className='col s1'>{props.time}</td>
        <td className='col s2'>{props.event}</td>
		<td className='col s7'>{props.coment}</td>
		<td className='col s1'><i className='material-icons left col s6 tiny'>border_color</i></td>
		<td className='col s1'><i className='material-icons left col s6 tiny'>delete_forever</i></td>
	</tr>
)

