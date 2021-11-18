import React from 'react'
import './App.css'
import {Router, Route} from 'react-router-dom'
import Header from './Header/Header'
import Pickers from  './Pickers/Pickers'
import NativeTabs from './PickersBody/NativeTabs'
import Home from './Home'
import { Switch } from 'react-materialize'

function App ()  {
  return (
    <div className = "App">
     <Router>
       <Route exact path = "/" component={<Home/>} />
     </Router>
    </div>
  )
} 
export default App; 



