import React, { Component } from 'react'



export default class Pickers extends Component {
	state = {
		date: new Date()
	}
	onChange = date => this.setState({date})
	render(){
		return (
			<div>
				<div>	
					<div> 
						<ul>
							<li>
								<i className='material-icons left'>access_alarms</i>выберите время *:
								<input type='text' id='autocomplete-input' className='autocomplete'></input>
							</li>
							<li>
								<i className='material-icons left'>content_paste</i>событие *:
								<input type='text' id='autocomplete-input' className='autocomplete'></input>
							</li>
							<li>
								<i className='material-icons left'>subject</i>описание события:
								<input type='text' id='autocomplete-input' className='autocomplete'></input>
							</li>
						</ul>
					</div>
					<div className='pickers'>
						{/*плохое форматирование, зачем сделано в одну строку?*/}
						{/*но самое главное, это неудобный UI, потому что кнопка Создать, работает как кнопка сбросить,
						по сути она должна была открыть модалку или уйти на новый роут с формой создания, дабы нельзя было её кликнуть
						ещё раз в процессе создания элемента, Кнопка сохранить выглядит лишней до тех пор пока не начался процесс создания.
						В общем, UI перегружен, этого нельзя допускать */}
						<bottom className='waves-effect waves-light btn'><i className='material-icons left'>playlist_add</i>создать</bottom>
					</div>
					<div className = 'pickers'>
						<bottom className='waves-effect waves-light btn'><i className='material-icons left'>playlist_add_check</i>сохранить</bottom>
					</div>
        		</div>		
			</div>
		)
	}
} 
