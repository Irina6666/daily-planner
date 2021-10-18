import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './PickersBody.css'


export default props => (
    <th class="col s6">
		<div>{props.name}</div>
		<div>{props.date}</div>
	</th>
)