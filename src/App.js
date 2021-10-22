import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import Pickers from  './Pickers/Pickers'
import AddUpdateComponent from  './AddUpdateComponent/AddUpdateComponent'
import PickersBodySevenDay from './PickersBody/PickersBodySevenDay'
import PickersBodyDay from  './PickersBody/PickersBodyDay'
import Footer from  './Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='row'>
          <Header  />
          <div className='col s4'>
            <Pickers />
          </div>
          <div className='col s4'>
            <AddUpdateComponent />
          </div>
          <PickersBodyDay />
          <PickersBodySevenDay />
          <div className='col s12'>
            <Footer />
          </div>

        </div>
      </div>
    )
  } 
}
export default App;



