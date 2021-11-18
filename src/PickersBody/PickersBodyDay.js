import React, {useEffect} from 'react'
import './TableStyle.css'
import './Scrollbar.css'
import { withTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'
import { loadEvents } from '../redux/action'
import ButtonDelete from './ButtonDelete';
import ButtonUpDate from './ButtonUpDate'
import userEvent from '@testing-library/user-event'

const PickersBodyDay = () => {

		let dispatch = useDispatch();
		const {events} = useSelector (state => state.data)

		useEffect (() => {
			dispatch(loadEvents());
		}, [])
		return ( 
			<div>
				<div className='scroll-table'>
					<table className='striped'>
						<thead>
							<tr>
								<th className='head-colomn-time line-head'>'TIME'</th>
								<th className='head-colomn-event line-head'>'EVENT'</th>
								<th className='line-head'>'EVENT_DESCRIPTION'</th>
								<th className='head-colomn-button line-head'></th>
								<th className='head-colomn-button line-head'></th>
							</tr> 
						</thead>
					</table>
					<div className='scroll-table-body'>
						<table className='striped'>
							<tbody>
								{events && events.map((event) => (
								
								<tr className='list' key={event.id}>
									<td className='head-colomn-time line'>{event.time}</td>
									<td className='head-colomn-event line'>{event.event}</td>
									<td className='line'>{event.comment}</td>
									<ButtonUpDate />
									<ButtonDelete />
								</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}  

export default PickersBodyDay;
