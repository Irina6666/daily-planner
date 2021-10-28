import React, { Component } from 'react'
import PickersBodyDayTable from  './PickersBodyDayTable'
import './PickersBody.css'

export default class PickersBodyDay extends Component {
	state = {
		// это легко делается через цикл
		// coment -> comment

		// где исправления к моим комментам?
		dailyList:[
			{time: '0.00', event: 'lorem', coment: 'lorem'},
			{time: '1.00', event: 'lorem', coment: 'lorem'},
			{time: '2.00', event: 'lorem', coment: 'lorem'},
			{time: '3.00', event: 'lorem', coment: 'lorem'},
			{time: '4.00', event: 'lorem', coment: 'lorem'},
			{time: '5.00', event: 'lorem', coment: 'lorem'},
			{time: '6.00', event: 'lorem', coment: 'lorem'},
			{time: '7.00', event: 'lorem', coment: 'lorem'},
			{time: '8.00', event: 'lorem', coment: 'lorem'},
			{time: '9.00', event: 'lorem', coment: 'lorem'},
			{time: '10.00', event: 'lorem', coment: 'lorem'},
			{time: '11.00', event: 'lorem', coment: 'lorem'},
			{time: '12.00', event: 'lorem', coment: 'lorem'},
			{time: '13.00', event: 'lorem', coment: 'lorem'},
			{time: '14.00', event: 'lorem', coment: 'lorem'},
			{time: '15.00', event: 'lorem', coment: 'lorem'},
			{time: '16.00', event: 'lorem', coment: 'lorem'},
			{time: '17.00', event: 'lorem', coment: 'lorem'},
			{time: '18.00', event: 'lorem', coment: 'lorem'},
			{time: '19.00', event: 'lorem', coment: 'lorem'},
			{time: '20.00', event: 'lorem', coment: 'lorem'},
			{time: '21.00', event: 'lorem', coment: 'lorem'},
			{time: '22.00', event: 'lorem', coment: 'lorem'},
			{time: '23.00', event: 'lorem', coment: 'lorem'},
		]
	}
	render(){
		return (
			<div>
				<div className='scroll-table'>
					<table className='striped'>
						<thead>
							<tr>
								{/*это недопустимо писать такие атрибуты, должно быть сделано через стили, я уже писал такой фидбек в прошлый раз*/}
								<th width='6%'>время</th>
								<th width='27%'>событие</th>
								<th>описание события</th>
								<th width='9%'></th>
							</tr>
						</thead>
					</table>
					<div className='scroll-table-body'>
						<table>
							<tbody>
								{/*это сделано хорошо*/}
								{this.state.dailyList.map((list, index) => {
									return (
										<PickersBodyDayTable
											key = {index}
											time = {list.time}
											event = {list.event}
											coment = {list.coment}
										/>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}


