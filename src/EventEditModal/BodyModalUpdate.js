import React, {useState, useEffect} from 'react'
import '../App.css'
import './BodyModal.css'
import { useDispatch, useSelector } from 'react-redux'
import {getSingleTack, updateTack,  } from '../redux/action'

const EventEditModal = (props) => { 

  const [state, setState] = useState ({
    time: "",
    tack: "",
    comment: ""
  })

  const [error, setError] = useState("")
  
  const task = useSelector (state => state.data.tack)
  let dispatch = useDispatch() 

  useEffect (() => {
		dispatch(getSingleTack(props.id));
}, [])

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState ({ ...state, [name]: value})
  }

  const handleSubmited = (e) => {
    e.preventDefault();
    //if (!time || !tack ) 
    //  {
    //  setError ("error, boxes time and event fields cannot be empty");
   // } 
   // else {
      dispatch (updateTack(state, props.id));
      setError ("")
    //}
  }

 
  const [tackTime, setTackTime] = useState (task.time)  
  const [tackTack, setTackTack] = useState (task.tack) 
  const [tackComment, setTackComment] = useState (task.comment) 
    return ( 
		   
			<div className="row">
        {error && <h6 className = "error">{error}</h6>}
        <form className="col s12" onSubmit={handleSubmited} 
        >
          <div className="row">
          <h6>'CHOOSE_A_TIME':</h6>
            <select 
              onChange = {handleInputChange}
              label = "time"
			  //value = {task.time}
			  value = {tackTime}
			  onChange = {e => setTackTime (e.target.value)}
              name = "time"
              className= "browser-default"
            >
              {/*цикл по option здесь*/}
              <option id ='0'> </option>
              <option id='1'>00.00</option>
              <option id='2'>01.00</option>
              <option id='3'>02.00</option>
              <option id='4'>03.00</option>
              <option id='5'>04.00</option>
              <option id='6'>05.00</option>
              <option id='7'>06.00</option>
              <option id='8'>07.00</option>
              <option id='9'>08.00</option>
              <option id='10'>09.00</option>
              <option id='11'>10.00</option>
              <option id='12'>11.00</option>
              <option id='13'>12.00</option>
              <option id='14'>13.00</option>
              <option id='15'>14.00</option>
              <option id='16'>15.00</option>
              <option id='17'>16.00</option>
              <option id='18'>17.00</option>
              <option id='19'>18.00</option>
              <option id='20'>19.00</option>
              <option id='21'>20.00</option>
              <option id='22'>21.00</option>
              <option id='23'>22.00</option>
              <option id='24'>23.00</option>
            </select>
            <label>
            <div className="input-field col s12">
              <h6>'EVENT':</h6>
              <input 
			  value = {tackTack}
			  onChange = {e => setTackTack (e.target.value)}
                
                //onChange = {handleInputChange}
                label = "tack"
               
                name = "tack"
                type='text' 
                className="materialize-textarea"
                >
              </input>
            </div>
            </label>

            <label>
            <div className="input-field col s12">
              <h6>'COMMENT (COMMENT IS NOT REQUIRED):'</h6>
              <input 
                
                //onChange = {handleInputChange}
                label = "comment"
                value = {tackComment}
			    onChange = {e => setTackComment (e.target.value)}
                type='text' 
                name = "comment"
                className= "materialize-textarea" 
                >
              </input>
            </div>
            </label>

            <div className='modal-footer'>
              <button 
                className='waves-effect waves-green btn-flat' 
                type='submit'
                onChange = {handleInputChange}>'SAVE'
              </button>
          </div>
          </div>
        </form>
        
      </div>
		)
	}

  export default EventEditModal;