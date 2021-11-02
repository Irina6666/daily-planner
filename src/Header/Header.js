import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import './Header.css'
import '../PickersBody/PickersBodyDay'
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

const languages = [ 
	{
		code: 'en',
		name: 'English',
		country_code: 'gb'
	},
	{
		code: 'ru',
		name: 'Русский',
		country_code: 'ru'
	}
]

class Header extends Component {
	componentDidMount(){
		document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.dropdown-trigger');
			M.Dropdown.init(elems, {});
		})
	}
	render(){
		const { t } = this.props;
		return (  
			<div>
				<nav className='nav-extended header'>
					<div className='nav-wrapper'>
						<h3 className='brand-logo'>Logo Time</h3> 
						<div className = 'd-flex justify-content-end'>
							<div className="dropdown">
								<button className="btn-floating btn-large  waves-effect waves-light teal btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="material-icons">language</i>
								</button>
								<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
									{languages.map(({ code, name, country_code }) => (
										<li key={country_code}>
											<button className="dropdown-item" onClick = {() => i18next.changeLanguage(code)
											}>
												{name}
											</button>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div className='nav-content'>
						<span>{t('calendar')}</span>
					</div>
				</nav>
			</div>
		)
	}
}
export default withTranslation()(Header);