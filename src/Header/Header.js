import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import './Header.css'

export default class Header extends Component {
    componentDidMount(){
		// не понимаю как оно здесь оказалось, этот Header и инициализация скриптов не имеют ничего общего
		/*
		 этот код должен быть в Modal.js, только там встречается .modal класс
		 */
		document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.modal');
			M.Modal.init(elems, {});
		})
	}
	render(){
		return (
			<nav className='nav-extended header'>
				<div className='nav-wrapper'>
					<h3 className='brand-logo'>Logo Time</h3>
					<ul className='right hide-on-med-and-down'>
						<li>
							{/*пропущен обязательный type=button как и все кнопки ниже*/}
							<button className='waves-effect waves-teal btn-flat'>за день</button>
						</li>
						<li>
							<button className='waves-effect waves-teal btn-flat'>за месяц</button>
						</li>
					</ul>
				</div>
				<div className='nav-content'>
					<span>календарь</span>

					<button data-target='modal1' className='btn modal-trigger btn-floating btn-large halfway-fab waves-effect waves-light teal'>
						<i className='material-icons'>add</i>
					</button>
				</div>
			</nav>
		)
	}
}
