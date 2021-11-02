import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import PickersBodyDay from'./PickersBodyDay'
import PickersBodySevenDay from'./PickersBodySevenDay'
import { withTranslation } from 'react-i18next';
import {Modal, Button} from 'react-materialize'
import EventEditModal from "../EventEditModal/BodyModal"


class Tabs extends Component {
    componentDidMount(){
		document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.tabs');
			M.Tabs.init(elems, {});
		})
	}
	render(){
		const { t } = this.props;
		return (  
			<div >
				<div className="col s12">
					<ul className="tabs">
						<li className="tab col s3"><a className="active" href="#day">{t('day')}</a></li>
						<li className="tab col s3"><a className="active" href="#month">{t('month')}</a></li>
						<li className = 'd-flex justify-content-end'>
							<Modal 
								header='Событие'
								trigger={
									<Button waves='light'
										data-target='modal1' 
										className='btn modal-trigger btn-floating btn-large  waves-effect waves-light teal'>
										<i className='material-icons'>add</i>
									</Button>}
							>
								<EventEditModal />
							</Modal>
						</li>
					</ul> 
				</div>
				<div id="day" className="col s12"><PickersBodyDay /></div>
				<div id="month" className="col s12"><PickersBodySevenDay /></div>
			</div>
		)
	} 
}
export default withTranslation()(Tabs);
