import React from 'react'
import './PickersBody.css'


export default props => (
    <th className='col s6'>
		<div>{props.name}</div>
		<div>{props.date}</div>
	</th>
) 