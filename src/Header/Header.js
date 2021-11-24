import React, {useEffect} from 'react'
import './Header.css'
import '../PickersBody/PickersBodyDay'
import { withTranslation } from 'react-i18next';
import {Modal, Button} from 'react-materialize'
import BodyModal from "../EventEditModal/BodyModal"
import SelectLang from './SelectLang';
import { useDispatch, useSelector } from 'react-redux'
import { loadTacks } from '../redux/action'
import { addTack } from '../redux/action'

const Header = () => {
	let dispatch = useDispatch();

	let handleAddTack = () => {
		if (window.confirm ("Are you wanted to add new event?")){
			dispatch (addTack())
		}
	}
	
	const {tacks} = useSelector (state => state.data)

	useEffect (() => {
		dispatch(loadTacks());
	}, [])

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
						'CALENDAR'
						
						<a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
							<Modal 
								header='EVENT'
								trigger={
									<Button waves='light'
										className='btn modal-trigger btn-floating btn-large  waves-effect waves-light teal'
										onClick={()=> handleAddTack()}>
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

export default Header;

