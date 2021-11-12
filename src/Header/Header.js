import React, { Component } from 'react'
import './Header.css'
import '../PickersBody/PickersBodyDay'
import { withTranslation } from 'react-i18next';
import {Modal, Button} from 'react-materialize'
import BodyModal from "../EventEditModal/BodyModal"
import SelectLang from './SelectLang';


class Header extends Component {
	render(){
		const { t } = this.props;
		return (  
			<div>
				<nav className="nav-extended header">
					<div className="nav-wrapper">
						<h3 className='brand-logo'>LogoTime</h3>
							<ul className="right hide-on-med-and-down">
							<SelectLang />
							</ul>
						</div>
						<div className="nav-content">
						{t('CALENDAR')}
						
						<a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
							<Modal 
								header={t('EVENT')}
								trigger={
									<Button waves='light'
										data-target='modal1' 
										className='btn modal-trigger btn-floating btn-large  waves-effect waves-light teal'>
										<i className='material-icons'>add</i>
									</Button>}
							>
								<BodyModal />
							</Modal>
							</a>
						</div>
				</nav>
			</div>
		)
	}
}
export default withTranslation()(Header);

