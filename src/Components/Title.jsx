import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputtext } from '../redux/Actions';

const Title = (props) => {
     const dispatch = useDispatch()
     const handleChange = (e) => {
          dispatch(inputtext(e.target.value))
     }
     const title = useSelector(state => {
          const {inputReducer} = state
          return inputReducer.text
     })
     return (
          <div className='card-title'>
               <div className='card-title-top'>
                    <input type="text" onChange={handleChange} />
               </div>
               <p>{title}</p>
          </div>
     );
};

export default Title;