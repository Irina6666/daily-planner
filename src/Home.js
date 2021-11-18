import React, {useEffect} from 'react'
import './App.css'
import Header from './Header/Header'
import Pickers from  './Pickers/Pickers'
import NativeTabs from './PickersBody/NativeTabs'
import { useDispatch, useSelector } from 'react-redux'
import { loadEvents } from './redux/action'

const Home = () => {
  let dispatch = useDispatch();
  const {events} = useSelector (state => state.data)

  useEffect (() => {
    dispatch(loadEvents());
  }, [])

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

