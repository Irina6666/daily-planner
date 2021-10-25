import React, { Component } from 'react';
import PickersBodyWeek from  './PickersBodyWeek'
import PickersBodyWeekTable from  './PickersBodyWeekTable'
import './PickersBody.css'

class PickersBodySevenDay extends Component {
	state = {
		weekListHead: [
			{name: '', date:'time'},
			{name: 'понедельник', date: 'ДАТА'},
			{name: 'вторник', date: 'ДАТА'},
			{name: 'среда', date: 'ДАТА'},
			{name: 'четверг', date: 'ДАТА'},
			{name: 'пятница', date: 'ДАТА'},
			{name: 'суббота', date: 'ДАТА'},
			{name: 'воскреенье', date: 'ДАТА'}
		],
		// это легко делается через цикл
		weekList:[
			{time: '0.00', eventMon: 'Стоматолог поставить пломбу Стоматолог поставить пломбу Стоматолог поставить пломбу', eventTue:'Стоматолог поставить пломбу', eventWed: 'Стоматолог поставить пломбу', eventThu: 'Стоматолог поставить пломбу', eventFrid: 'Стоматолог поставить пломбу', eventSat: 'Стоматолог поставить пломбу', eventSun: 'Стоматолог поставить пломбу'},
			{time: '1.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '2.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '3.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '4.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '5.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '6.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '7.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '8.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '9.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '10.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '11.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '12.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '13.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '14.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '15.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '16.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '17.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '18.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '19.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '20.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '21.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '22.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
			{time: '23.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
		],
	}
	render() {
		return (
			<div>
				<div className='scroll-table'>
					<table className='striped'>
						<thead>
							<tr>
								{this.state.weekListHead.map((list, index) => {
									return (
										<PickersBodyWeek 
											key = {index}
											name = {list.name}
											date = {list.date}
										/>
									)
								})}
							</tr>
						</thead>
					</table>
					<div className='scroll-table-body'>
						<table>
								<tbody>
								{this.state.weekList.map((list, index) => {
									return (
										<PickersBodyWeekTable 
											key = {index}
											time = {list.time}
											eventMon = {list.eventMon}
											eventTue = {list.eventTue}
											eventWed = {list.eventWed}
											eventThu = {list.eventThu}
											eventFrid = {list.eventFrid}
											eventSat = {list.eventSat}
											eventSun = {list.eventSun}
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
export default  PickersBodySevenDay