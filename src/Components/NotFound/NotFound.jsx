import React from 'react'
import img from '../../assets/imgs/img/error.jpg' 


export default function NotFound() {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
        <img src={img} alt="" className='w-75'/>
      </div>
  )
}
