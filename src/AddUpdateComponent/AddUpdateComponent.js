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
								{/*в реакте нет атрибута class, есть className*/}
								<i class="material-icons left">access_alarms</i>выберите время *:
								<input type="text" id="autocomplete-input" class="autocomplete"></input>
							</li>
							<li>
								<i class="material-icons left">content_paste</i>событие *:
								<input type="text" id="autocomplete-input" class="autocomplete"></input>
							</li>
							<li>
								<i class="material-icons left">subject</i>описание события:
								<input type="text" id="autocomplete-input" class="autocomplete"></input>
							</li>
						</ul>
					</div>
					{/*а здесь вот className как положено, но плохое форматирование должно быть <div className='pickers'>*/}
					<div className = 'pickers'>
						{/*это не ссылка, а кнопка, это критично, принципиально, ссылки куда-то ведут на другую страницу, всё*/}
						{/*https://youtu.be/zbx8AtFPCWk*/}
						{/*плохое форматирование, зачем сделано в одну строку?*/}
						{/*но самое главное, это неудобный UI, потому что кнопка Создать, работает как кнопка сбросить,
						по сути она должна была открыть модалку или уйти на новый роут с формой создания, дабы нельзя было её кликнуть
						ещё раз в процессе создания элемента, Кнопка сохранить выглядит лишней до тех пор пока не начался процесс создания.
						В общем, UI перегружен, этого нельзя допускать */}
						<a class="waves-effect waves-light btn"><i class="material-icons left">playlist_add</i>создать</a>
					</div>

					<div className = 'pickers'>
						<a class="waves-effect waves-light btn"><i class="material-icons left">playlist_add_check</i>сохранить</a>
					</div>
        		</div>		
			</div>
		)
	}
} 
