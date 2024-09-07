import React from 'react'
import { bannerAboutUs } from '../../../assets'

export const Section1AboutUs = () => {
  return (
    <>
    
        <div className="container-fluid position-relative d-flex justify-content-center align-items-center m-0 p-0 overflow-hidden bg-white py-5 py-lg-3">

            <h1 className='z-1 font-big-1 py-5 py-lg-5'>About Us</h1>

            <div className="position-absolute overflow-hidden">
                <img className='d-none d-md-block d-lg-block object-fit-cover opacity-25' src={bannerAboutUs} alt="" />
                <img className='d-block d-md-none d-lg-none w-100 object-fit-cover opacity-50' src={bannerAboutUs} alt="" />
            </div>
        </div>
    
    </>
  )
}
