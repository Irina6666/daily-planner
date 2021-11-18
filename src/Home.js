import React from 'react'
import './App.css'
import Header from './Header/Header'
import Pickers from  './Pickers/Pickers'
import NativeTabs from './PickersBody/NativeTabs'

const Home = () => {
  return (
    <div className='row'>
      <Header  />
      <div className='col s5'>
        <Pickers />
      </div>
      <NativeTabs />
    </div>
  )
} 
export default Home;