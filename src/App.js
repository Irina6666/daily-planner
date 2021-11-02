import React from 'react'
import './App.css'
import Header from './Header/Header'
import Pickers from  './Pickers/Pickers'
import Tabs from './PickersBody/Tabs'

function App ()  {
  return (
    <div className='row'>
      <Header  />
      <div className='col s5'>
        <Pickers />
      </div>
      <Tabs />
    </div>
  )
} 
export default App;



