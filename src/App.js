import React from 'react'
import './App.css'
import Header from './Header/Header'
import Pickers from  './Pickers/Pickers'
import PickersBodySevenDay from './PickersBody/PickersBodySevenDay'
import PickersBodyDay from  './PickersBody/PickersBodyDay'
import Footer from  './Footer/Footer'
import Modal from './Modal/Modal'

function App ()  {
    return (
      <div className='row'>
          <Header  />
          <div className='col s5'>
            <Pickers />
          </div>
          <div className=''>
          <PickersBodyDay />
          </div>
          <div className=''>
          <PickersBodySevenDay />
          </div>
          <Footer />
          <Modal />
      </div>
    )
  } 

export default App;



