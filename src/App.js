import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import BodyModal from './EventEditModal/BodyModal'
import BodyModalUpdate from './EventEditModal/BodyModalUpdate'

function App ()  {
  return (
    <div className = "App">
      <div className='row'>
        <Routes>
          <Route exact path = "/" element={<Home/>} />
          <Route exact path = "/BodyModal" element={<BodyModal/>} />
          <Route exact path = "/BodyModalUpdate/:id" element={<BodyModalUpdate/>} />
        </Routes>
      </div>
    </div>
  )
} 
export default App; 



