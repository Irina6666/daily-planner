import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import Header from './Header/Header'

import Pickers from  './Pickers/Pickers'

import AddUpdateComponent from  './AddUpdateComponent/AddUpdateComponent'


import PickersBodyDay from  './PickersBody/PickersBodyDay'
import PickersBodyDayTable from  './PickersBody/PickersBodyDayTable'

import PickersBodyWeek from  './PickersBody/PickersBodyWeek'
import PickersBodyWeekWeekend from  './PickersBody/PickersBodyWeekWeekend'
import PickersBodyWeekTable from  './PickersBody/PickersBodyWeekTable'
import PickersBodyWeekTableWeekend from  './PickersBody/PickersBodyWeekTableWeekend'

import Footer from  './Footer/Footer'

class App extends Component {
  // по хорошему есть смысл перенести весь стейт в отдельный файлик с данными, даже временными, потому что он занимает много места и мешает читать код,
  // файлы не должны быть огромными, особенно если файл можно дробить на меньшие части
  state = {
    weekListHead: [
      {name: '', date:'time'},
      {name: 'понедельник', date: 'ДАТА'},
      {name: 'вторник', date: 'ДАТА'},
      {name: 'среда', date: 'ДАТА'},
      {name: 'четверг', date: 'ДАТА'},
      {name: 'пятница', date: 'ДАТА'},
      ],

      weekListHeadWeekend: [
        {name: 'суббота', date: 'ДАТА'},
        {name: 'воскреенье', date: 'ДАТА'},
      ],

    // это легко делается через цикл
      weekList:[
        {time: '0.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'loremu'},
        {time: '1.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '2.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '3.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '4.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '5.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '6.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '7.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '8.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '9.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '10.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '11.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '12.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '13.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '14.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '15.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '16.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '17.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '18.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '19.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '20.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '21.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '22.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
        {time: '23.00', eventMon: 'lorem', eventTue:'lorem', eventWed: 'lorem', eventThu: 'lorem', eventFrid: 'lorem', eventSat: 'lorem', eventSun: 'lorem'},
      ],

    // это легко делается через цикл
    // coment -> comment
    dailyList:[
      {time: '0.00', event: 'lorem', coment: 'lorem'},
      {time: '1.00', event: 'lorem', coment: 'lorem'},
      {time: '2.00', event: 'lorem', coment: 'lorem'},
      {time: '3.00', event: 'lorem', coment: 'lorem'},
      {time: '4.00', event: 'lorem', coment: 'lorem'},
      {time: '5.00', event: 'lorem', coment: 'lorem'},
      {time: '6.00', event: 'lorem', coment: 'lorem'},
      {time: '7.00', event: 'lorem', coment: 'lorem'},
      {time: '8.00', event: 'lorem', coment: 'lorem'},
      {time: '9.00', event: 'lorem', coment: 'lorem'},
      {time: '10.00', event: 'lorem', coment: 'lorem'},
      {time: '11.00', event: 'lorem', coment: 'lorem'},
      {time: '12.00', event: 'lorem', coment: 'lorem'},
      {time: '13.00', event: 'lorem', coment: 'lorem'},
      {time: '14.00', event: 'lorem', coment: 'lorem'},
      {time: '15.00', event: 'lorem', coment: 'lorem'},
      {time: '16.00', event: 'lorem', coment: 'lorem'},
      {time: '17.00', event: 'lorem', coment: 'lorem'},
      {time: '18.00', event: 'lorem', coment: 'lorem'},
      {time: '19.00', event: 'lorem', coment: 'lorem'},
      {time: '20.00', event: 'lorem', coment: 'lorem'},
      {time: '21.00', event: 'lorem', coment: 'lorem'},
      {time: '22.00', event: 'lorem', coment: 'lorem'},
      {time: '23.00', event: 'lorem', coment: 'lorem'},
    ]
  }
// пустые строки лишние


  render() {
    const dailyList = this.state.dailyList
    const weekListHead = this.state.weekListHead
    const weekListHeadWeekend = this.state.weekListHeadWeekend
    // лишний пробел после const, никогда такого не допускай, это плохое отношение к тому кто читает твой код
    const  weekList = this.state.weekList

    return (
      <div>
        {/*мимо секция head, это должно быть в /public/index.html*/}
        <head className="head">
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
			  </head>
      
        <div className="App">
          <div class="row">
            <div class="col s12">
              <Header class="col s12" />
            </div>

            <div class="col s4">
              <Pickers />
            </div>

            <div class="col s4">
              <AddUpdateComponent />
            </div>

            {/*вот это всё должно быть в отдельном компоненте, нельзя превращать любой компонент (в данном случае App.js) */}
            {/*в большую свалку*/}
            <div class="col s12" >
              <div class="col s12">
                <table class="striped">
                  <thead>
                    <PickersBodyDay />
                  </thead>
                  <tbody>
                    {this.state.dailyList.map((list, index) => {
                      return (
                        <PickersBodyDayTable 
                          key = {index}
                          time = {list.time}
                          event = {list.event}
                          coment = {list.coment}
                        />
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/*и это отдельный компонент*/}
            <div class="col s9" >
              <div class="col s12">
                <table class="striped">
                  <thead>
                  <tr>
                    {this.state.weekListHead.map((list, index) => {
                      return (
                        <PickersBodyWeek 
                          key = {index}
                          name = {list.name}
                          date = {list.date}
                        />
                      )
                    })}
                  </tr>
                  </thead>

                  <tbody>
                    {this.state. weekList.map((list, index) => {
                      return (
                        <PickersBodyWeekTable 
                          key = {index}
                          time = {list.time}
                          eventMon = {list.eventMon}
                          eventTue = {list.eventTue}
                          eventWed = {list.eventWed}
                          eventThu = {list. eventThu}
                          eventFrid = {list.eventFrid}
                        />
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/*это тоже отдельным компонентом*/}
            <div class="col s3" >
              <div class="col s12">
                <table class="striped">
                  <thead>
                    <tr>
                      {this.state.weekListHeadWeekend.map((list, index) => {
                        return (
                          <PickersBodyWeekWeekend
                            key = {index}
                            name = {list.name}
                            date = {list.date}
                          />
                        )
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.weekList.map((list, index) => {
                      return (
                          // эта таблица будет сильно перегружена, достаточно проверить не с именами типа "Lorem" а например "Стоматолог поставить пломбу",
                          // а с более реальными 3 словами в заголовке, этот тестовый набор данных не подходит для тестирования,
                          // потому что ты избегаешь таким образом проверку своего UI на дополнительную текстовую нагрузку,
                          // что приведет в проде к тому что UI будет перегружен
                        <PickersBodyWeekTableWeekend
                          key = {index}
                          eventSat = {list.eventSat}
                          eventSun = {list.eventSun}
                        />
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div class="col s12">
              <Footer />
            </div>

            {/*ошибка в табуляции, форматирование прыгает, погугли команду для IDE для автоформата*/}
	  		  </div>
        </div>
      </div>
    );
  } 
}

export default App;



