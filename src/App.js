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



  render() {
    const dailyList = this.state.dailyList
    const weekListHead = this.state.weekListHead
    const weekListHeadWeekend = this.state.weekListHeadWeekend
    const  weekList = this.state.weekList

    return (
      <div>
        <head className="head">
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
			  </head>
      
        <div className="App">
          <div class="row">
            <div class="col s12">
              <Header />
            </div>

            <div class="col s4">
              <Pickers />
            </div>

            <div class="col s4">
              <AddUpdateComponent />
            </div>

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

	  		  </div>
        </div>
      </div>
    );
  } 
}

export default App;



