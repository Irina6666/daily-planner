import React, { Component } from 'react'
import {Modal, Button} from 'react-materialize'
import BodyModal from "../EventEditModal/BodyModal"

export default class ButtonUpDate extends Component {
	render(){
		return (
			<td className='head-colomn-button line'>
				<Modal
					header='Событие'
					trigger={
						<Button 
							data-target='modal1' 
							className='modal-trigger waves-effect btn-small'>
							<i className='material-icons'>border_color</i>
						</Button>}>
						<BodyModal />
				</Modal>
			</td>
		)
	}
}  
