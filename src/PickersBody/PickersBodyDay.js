import React, { Component } from 'react'
import PickersBodyDayTable from  './PickersBodyDayTable'
import './PickersBody.css'


export default class PickersBodyDay extends Component {

	state = {
		// это легко делается через цикл
		// coment -> comment
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
			<div className='col s12' >
                <table className='striped'>
					<thead>
						<tr>
							<th className='col s1'>время</th>
							<th className='col s2'>событие</th>
							<th className='col s9'>описание события</th>
						</tr>
					</thead>
					<tbody>
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
		)
	}
}


