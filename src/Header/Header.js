import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import './Header.css'

export default class Header extends Component {
    componentDidMount(){
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