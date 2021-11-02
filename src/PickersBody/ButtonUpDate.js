import React, { Component } from 'react'
import {Modal, Button} from 'react-materialize'
import EventEditModal from "../EventEditModal/EventEditModal"

export default class ButtonUpDate extends Component {
	render(){
		return (
			<td width= '9%'>
				<Modal
					header='Событие'
					trigger={
						<Button 
							data-target='modal1' 
							className='modal-trigger waves-effect btn-small'>
							<i className='material-icons'>border_color</i>
						</Button>}>
						<EventEditModal />
				</Modal>
				<button className='waves-effect waves-light btn-small'><i className='material-icons'>delete_forever</i></button>
			</td>
		)
	}
}
