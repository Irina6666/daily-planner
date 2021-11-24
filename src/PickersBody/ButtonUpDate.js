import React from 'react'
import {Modal, Button} from 'react-materialize'
import BodyModalUpdate from "../EventEditModal/BodyModalUpdate"
import { useDispatch } from 'react-redux'
import { getSingleTack } from '../redux/action'

const ButtonUpDate = (props) => {
	let dispatch = useDispatch();
	
	let handleUpDate = (id) => {
		if (window.confirm ("Are you sure wanted to update this event?")){
			dispatch (getSingleTack(id))
		}
	}

		return (
			<td className='head-colomn-button line'>
				<Modal
					header='Событие'
					trigger={
						<Button 
							className='modal-trigger waves-effect btn-small'
							onClick={() => handleUpDate(props.tack.id)}>
							<i className='material-icons'>border_color</i>
						</Button>}>
						<BodyModalUpdate />
				</Modal>
			</td>  
		)
	}

export default ButtonUpDate;