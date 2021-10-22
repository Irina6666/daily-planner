import React, { Component } from 'react';
import PickersBodyWeek from  './PickersBodyWeek'
import PickersBodyWeekWeekend from  './PickersBodyWeekWeekend'
import PickersBodyWeekTable from  './PickersBodyWeekTable'
import PickersBodyWeekTableWeekend from  './PickersBodyWeekTableWeekend'


// эта таблица будет сильно перегружена, достаточно проверить не с именами типа "Lorem" а например "Стоматолог поставить пломбу",
// а с более реальными 3 словами в заголовке, этот тестовый набор данных не подходит для тестирования,
// потому что ты избегаешь таким образом проверку своего UI на дополнительную текстовую нагрузку,
// что приведет в проде к тому что UI будет перегружен

export default class PickersBodySevenDay extends Component {
	state = {
		weekListHead: [
			{name: '', date:'time'},
			{name: 'понедельник', date: 'ДАТА'},
			{name: 'вторник', date: 'ДАТА'},
			{name: 'среда', date: 'ДАТА'},
			{name: 'четверг', date: 'ДАТА'},
			{name: 'пятница', date: 'ДАТА'},
		],
	
		weekListHeadWeekend: [
			{name: 'суббота', date: 'ДАТА'},
			{name: 'воскреенье', date: 'ДАТА'},
		],

		// это легко делается через цикл
		weekList:[
			{time: '0.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'loremu'},
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
	const weekListHead = this.state.weekListHead
    const weekListHeadWeekend = this.state.weekListHeadWeekend
    const weekList = this.state.weekList
		return (
			<div >
				<div className='col s9'>
					<div className='col s12'>
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

							<tbody>
								{this.state. weekList.map((list, index) => {
									return (
										<PickersBodyWeekTable 
											key = {index}
											time = {list.time}
											eventMon = {list.eventMon}
											eventTue = {list.eventTue}
											eventWed = {list.eventWed}
											eventThu = {list. eventThu}
											eventFrid = {list.eventFrid}
										/>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>

				<div className='col s3'>
					<div className='col s12'>
						<table className='striped'>
							<thead>
								<tr>
									{this.state.weekListHeadWeekend.map((list, index) => {
										return (
											<PickersBodyWeekWeekend
												key = {index}
												name = {list.name}
												date = {list.date}
											/>
										)
									})}
								</tr>
							</thead>
							<tbody>
								{this.state.weekList.map((list, index) => {
									return (
										<PickersBodyWeekTableWeekend
											key = {index}
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