import React from 'react'
import { bannerContact } from '../../../assets'

export const Section1Contact = () => {
  return (
    <>
    
        <div className="container-fluid p-0 m-0">
          <div className="col-12 d-flex justify-content-center align-items-center overflow-hidden position-relative height-banner-glass-bottles z-0">
              <div className="position-absolute col-12 h-100">
                  <img className='w-100 h-100 object-fit-cover' src={bannerContact} alt="" />
              </div>
          </div>
        </div>
    
    </>
  )
}
