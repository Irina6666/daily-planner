import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './PickersBody.css'


export default class PickersBodyDay extends Component {
	render(){
		return (
			// не используются пробелы между атрибутом и значением
          	<tr>
				<th className = "col s1">время</th>
              	<th className = "col s2">событие</th>
				<th className = "col s9">описание события</th>
			</tr>
		)
	}
}

