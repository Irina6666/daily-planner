import React from 'react'
import '../App.css'
import './BodyModal.css'
import { useForm } from 'react-hook-form'


export default function EventEditModal () {
  const {
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset,
    trigger,
  }
  = useForm();

  const onSubmit = (data) => {
    console.log (data);
    reset()
  };


    return (      
			<div className="row">
        <form className="col s12" onSubmit={handleSubmit(onSubmit)} >
          <div className="row">
          <h6>'CHOOSE_A_TIME':</h6>
            <select 
              className={`browser-default ${errors.time && 'invalid'}`}
              {...register('time', {required: "Time is Required"})}
              onKeyUp={() => {
                trigger('time')
              }}
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
            {errors.time && (<small className= "error">Time is Required</small>)}
            
  
            <div className="input-field col s12">
              <h6>'EVENT':</h6>
              <input 
                type='text' 
                className={`materialize-textarea ${errors.event && 'invalid'}`}
              
                {...register('event', {required: "Event is Required",
                minLength: {
                  value: 3,
                  message: 'Minimum required length is 3'
                },
                maxLength: {
                  value: 15,
                  message: 'Minimum allowed length is 15'
                }
                })}
                onKeyUp={() => {
                  trigger('event')
                }}
                >
              </input>
              {errors.event && (<small className= "error">{errors.event.message}</small>)}
            </div>

            <div className="input-field col s12">
              <h6>'COMMENT (COMMENT IS NOT REQUIRED):'</h6>
              <input 
                type='text' 
                className={`materialize-textarea ${errors.comment && 'invalid'}`} 
                {...register('comment', {
                maxLength: {
                  value: 5,
                  message: 'Maximum allowed length is 50'
                }})}
                onKeyUp={() => {
                  trigger('comment')
                }}
                >
              </input>
              {errors.comment && (<small className= "error">{errors.comment.message}</small>)}
              
            </div>
            <div className='modal-footer'>
              <button className='modal-close waves-effect waves-green btn-flat'>'SAVE'</button>
          </div>
          </div>
        </form>
      </div>
		)
	}

