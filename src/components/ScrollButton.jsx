import React from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollButton = () => {

    const {pathname} = useLocation();

    
  return (
    pathname === '/error'? <></>

    :
    <>
        <div className='scroll-button-container animate__animated animate__bounceInDown'>
            <button className='btn d-flex justify-content-center align-items-center border border-0 rounded-circle position-relative p-4 shadow-lg'>
                <i className="bi bi-cart-fill position-absolute"></i>
            </button>
        </div>
    </>
  )
}
