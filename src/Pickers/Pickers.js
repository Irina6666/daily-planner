import React, { Component } from 'react'
import Calendar from 'react-calendar'
import 'materialize-css/dist/css/materialize.min.css'
import './Pickers.css'


export default class Pickers extends Component {
	
	state = {
		date: new Date()
	}
	onChange = date => this.setState({date})
	
	render(){
		return (
			<div>
				<Calendar
					onChange = {this.onChange}
					value = {this.state.date}
				/>
			</div>
		)
	}
} 