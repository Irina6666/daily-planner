import React, {useEffect} from 'react'
import './TableStyle.css'
import './Scrollbar.css'
import { withTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'
import ButtonDelete from './ButtonDelete';
import ButtonUpDate from './ButtonUpDate'


const PickersBodyDay = () => {

		const {tacks} = useSelector (state => state.data)

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
								{tacks && tacks.map((tack) => (
								
								<tr className='list' key={tack.id}>
									<td className='head-colomn-time line'>{tack.time}</td>
									<td className='head-colomn-event line'>{tack.tack}</td>
									<td className='line'>{tack.comment}</td>
									<ButtonUpDate tack = {tack}/>
									<ButtonDelete tack = {tack}/>
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
