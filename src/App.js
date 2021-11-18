import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Header from './Header/Header'
import Pickers from  './Pickers/Pickers'
import NativeTabs from './PickersBody/NativeTabs'
import Home from './Home'


function App ()  {
  return (
    <div className = "App">
      <div className='row'>
        <Routes>
          <Route exact path = "/" element={<Home/>} />
        </Routes>
      </div>
    </div>
  )
} 
export default App; 



