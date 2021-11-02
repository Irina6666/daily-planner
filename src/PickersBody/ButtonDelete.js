import React, { Component } from 'react'

export default class ButtonDelete extends Component {
	render(){
		return (
			<td className='head-colomn-button line'>
				<button className='waves-effect waves-light btn-small'><i className='material-icons'>delete_forever</i></button>
			</td>
		)
	}
}