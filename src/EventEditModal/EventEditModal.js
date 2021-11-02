import React, { Component } from 'react'
import '../App.css'
import { withTranslation } from 'react-i18next';

class EventEditModal extends Component {
  render(){
    const { t } = this.props; {t('')}
		return (
            // форматирование всё ещё прыгает
			<div className="row">
        <form className="col s12">
          <div className="row">
          <label>{t('choose_a_time')}</label>
            <select className='browser-default'>
              {/*цикл по option здесь*/}
              <option id ='0'>{t('choose_a_time')}</option>
              <option id='1'>00.00</option>
              <option id='2'>01.00</option>
              <option id='3'>02.00</option>
              <option id='4'>03.00</option>
              <option id='5'>04.00</option>
              <option id='6'>05.00</option>
              <option id='7'>06.00</option>
              <option id='8'>07.00</option>
              <option id='9'>08.00</option>
              <option id='10'>09.00</option>
              <option id='11'>10.00</option>
              <option id='12'>11.00</option>
              <option id='13'>12.00</option>
              <option id='14'>13.00</option>
              <option id='15'>14.00</option>
              <option id='16'>15.00</option>
              <option id='17'>16.00</option>
              <option id='18'>17.00</option>
              <option id='19'>18.00</option>
              <option id='20'>19.00</option>
              <option id='21'>20.00</option>
              <option id='22'>21.00</option>
              <option id='23'>22.00</option>
              <option id='24'>23.00</option>
            </select>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className='material-icons prefix'>mode_edit</i>
              {/*id не использем по возможности*/}
              <textarea id='icon_prefix2' className='materialize-textarea'></textarea>
              <label htmlFor='icon_prefix2'>{t('event')}</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className='material-icons prefix'>mode_edit</i>
              <textarea id='icon_prefix2' className='materialize-textarea'></textarea>
              <label htmlFor='icon_prefix2'>{t('comment')}</label>
            </div>
          </div>
        </form>
        <div className='modal-footer'>
          <button className='modal-close waves-effect waves-green btn-flat'>{t('save')}</button>
          <button className='modal-close waves-effect waves-green btn-flat'>{t('close')}</button>
        </div>
      </div>
		)
	}
}
export default withTranslation()(EventEditModal);
