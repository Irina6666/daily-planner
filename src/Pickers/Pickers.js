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
				{/*определенно не хватает стилей*/}
				{/*https://github.com/wojtekmaj/react-calendar#custom-styling*/}
				<Calendar
					onChange = {this.onChange}
					value = {this.state.date}
				/>
			</div>
		)
	}
} 
