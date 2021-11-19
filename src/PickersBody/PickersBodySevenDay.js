import React, {useEffect} from 'react';
import './TableStyle.css'
import { withTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'
import { loadTacks } from '../redux/action'


	const PickersBodySevenDay = () => {

		let dispatch = useDispatch();
		const {tacks} = useSelector (state => state.data)

		useEffect (() => {
			dispatch(loadTacks());
		}, [])
		
		return (
			<div> 
				<div className='scroll-table'>
					<table className='table-body'>
						<thead>
							<tr>
							<th className='head-colomn-time line-head'>'TIME'</th>
							<th className='line-head'><span>'MONDAY'</span> <span> 01.11.2021</span></th>
							<th className='line-head'><span>'TUESDAY'</span> <span> 01.11.2021</span></th>
							<th className='line-head'><span>'WEDNESDAY'</span> <span> 01.11.2021</span></th>
							<th className='line-head'><span>'THURSDAY'</span> <span> 01.11.2021</span></th>
							<th className='line-head'><span>'FRIDAY'</span> <span> 01.11.2021</span></th>
							<th className='line-head'><span>'SATUDAY'</span> <span> 01.11.2021</span></th>
							<th className='line-head'><span>'SUNDAY'</span> <span> 01.11.2021</span></th>
							</tr>
						</thead>
					</table>
					<div className='scroll-table-body'>
						<table className='table-body striped'>
								<tbody>
								{tacks && tacks.map((tack) => (

									<tr className='list' key={tack.id}>
									<td className='head-colomn-time line'>{tack.time}</td>
									<td className='line'>{tack.tack}</td>
									<td className='line'>{tack.tack}</td>
									<td className='line'>{tack.tack}</td>
									<td className='line'>{tack.tack}</td>
									<td className='line'>{tack.tack}</td>
									<td className='line'>{tack.tack}</td>
									<td className='line'>{tack.tack}</td>
								</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
export default PickersBodySevenDay;  