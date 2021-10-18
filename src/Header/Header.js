import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './Header.css'


export default class Header extends Component {
	render(){
		return (
			<nav className = "header darken-4">
    			<div class="nav-wrapper">
     				 <a href="#" class="brand-logo">календарь</a>
      				 <ul id="nav-mobile" class="right hide-on-med-and-down">
        				<li>
							<a href="sass.html">за день</a>
						</li>
        				<li>
							<a href="badges.html">за неделю</a>
						</li>
      				</ul>
    			</div>
  			</nav>	
		)
	}
}