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
					<div className = 'pickers'>
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