import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './Header.css'


export default class Header extends Component {
	render(){
		return (
			<nav className='header darken-4'>
				<div className='nav-wrapper'>
					<a href='#' className='brand-logo'>календарь</a>
					<ul id='nav-mobile' className='right hide-on-med-and-down'>
						<li>
							<a href='#'>за день</a>
						</li>
						<li>
							<a href='#'>за неделю</a>
						</li>
					</ul>
				</div>
			</nav>	
		)
	}
}
