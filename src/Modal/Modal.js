import React, { Component } from 'react'
import '../App.css'

export default class Modal extends Component {
  /**
   * некорректно давать этому компоненту имя Modal, в данном случае это EventEditModal например потому что у тебя здесь вполне конкретная модалка
   * в теории если есть компонент Modal то он значительно сложнее: ты должна передавать внутрь Modal компонент, который ты хочешь отобразить динамически
   * но такой вариант действительно сложный, его содержат сложные UI библиотеки, можно как и у тебя
   * посмотри например здесь
   * http://react-materialize.github.io/react-materialize/?path=/story/javascript-modal--default
   * там справа иконка и можно глянуть исходники как это применяется
   */
  render(){
		return (
			<div id='modal1' className='modal'>
        <div className='modal-content'>
          <h4>событие</h4>
          <div className='row'>
            <form className='col s12'>
              <div className='row'>
                <label>выберите время*</label>
                <select className='browser-default'>
                  <option id ='0'>выберите время</option>
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
                <div className='input-field col s12'>
                  <i className='material-icons prefix'>mode_edit</i>
                  <textarea id='icon_prefix2' className='materialize-textarea'></textarea>
                  <label htmlFor='icon_prefix2'>событие</label>
                </div>
                <div className='input-field col s12'>
                  <i className='material-icons prefix'>mode_edit</i>
                  <textarea id='icon_prefix2' className='materialize-textarea'></textarea>
                  <label htmlFor='icon_prefix2'>комментарий</label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='modal-footer'>
          <button className='modal-close waves-effect waves-green btn-flat'>сохранить</button>
          <button className='modal-close waves-effect waves-green btn-flat'>закрыть</button>
        </div>
      </div>
		)
	}
}
