import React, { Component } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './Pickers.css'

export default class Pickers extends Component {
	state = {
		date: new Date()
	}
	onChange = date => this.setState({date})
	render(){
		return (
			<div>
				<div className='pickers'></div>
				<Calendar
					onChange = {this.onChange}
					value = {this.state.date}
				/>
				<br/>
			</div>
		)
	}
}  