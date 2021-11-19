import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTack } from '../redux/action'

const ButtonDelete = (props) => {
	let dispatch = useDispatch();

	let handleDelete = (id) =>{
		if(window.confirm("Are you sure wanted to delete the event?")){
			dispatch (deleteTack(id))
		}
	}
	return (
		<td className='head-colomn-button line'>
			<button
				className='waves-effect waves-light btn-small'
				onClick={() => handleDelete(props.tack.id)}>
			<i className='material-icons'>delete_forever</i></button>
		</td>
	) 
}

export default ButtonDelete;