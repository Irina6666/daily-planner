import React, {useState, useEffect} from 'react'
import '../App.css'
import './BodyModal.css'
import { useDispatch, useSelector } from 'react-redux'
import {getSingleTack, updateTack,  } from '../redux/action'

const EventEditModal = (props) => {
  const [error, setError] = useState("")

  const task = useSelector (state => state.data.tack)
  let dispatch = useDispatch()

  useEffect (() => {
		dispatch(getSingleTack(props.id));
}, [])

  useEffect(() => {
    if (!task) {
      return;
    }

    setTackTack(task.tack);
    setTackTime(task.time);
    setTackComment(task.comment);
  }, [task])

  const handleSubmited = (e) => {
    e.preventDefault();
    //if (!time || !tack )
    //  {
    //  setError ("error, boxes time and event fields cannot be empty");
   // }
   // else {
      dispatch (updateTack({
        time: tackTime,
        tack: tackTack,
        comment: tackComment
      }, props.id));
      setError ("")
    //}
  }


  const [tackTime, setTackTime] = useState (0)
  const [tackTack, setTackTack] = useState ('')
  const [tackComment, setTackComment] = useState ('')

  let hours = [];
  for (let i = 0; i < 24; i++) {
    hours.push(i)
  }

    return (

			<div className="row">
        {error && <h6 className = "error">{error}</h6>}
        <form className="col s12" onSubmit={handleSubmited}
        >
          <div className="row">
          <h6>'CHOOSE_A_TIME':</h6>
            <select
              label = "time"
			  //value = {task.time}
			  value = {tackTime}
			  onChange = {e => setTackTime (e.target.value)}
              name = "time"
              className= "browser-default"
            >
              {
                hours.map((h, i) => <option key={h} value={h}>{h}</option>)
              }
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
                type='submit'>'SAVE'
              </button>
          </div>
          </div>
        </form>

      </div>
		)
	}

  export default EventEditModal;
