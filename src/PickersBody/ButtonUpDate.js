import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

// имя файла и класса внутри должно совпадать, это мешает поиску компонента
export default class Button extends Component {
	componentDidMount(){
		// опять инициализация?! смотри Header.js, этот код неверный
		document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.modal');
			M.Modal.init(elems, {});
		  })
	}
	render(){
		// что с форматированием далее? надо поправить
		return (
			<td width= '9%'>
			<span data-target='modal1' className='button material-icons left col s6 tiny modal-trigger'>border_color
			</span>

			<span className='button material-icons left col s6 tiny'>delete_forever
		</span>
		</td>
		)
	}
}
