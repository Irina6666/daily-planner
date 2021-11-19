import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { deleteEvent } from '../redux/action'



const ButtonDelete = () => {
	let dispatch = useDispatch();

		

		const handleDelete = (id) =>{
			if(window.confirm("Are you sure wanted to delete the event?")){
				dispatch (deleteEvent(id))
			}
		}



		return (
			<td className='head-colomn-button line'>
				<button 
					className='waves-effect waves-light btn-small'
					onClick={() => handleDelete(event.id)}>
				<i className='material-icons'>delete_forever</i></button>
			</td>
		) 
	
}

export default ButtonDelete;