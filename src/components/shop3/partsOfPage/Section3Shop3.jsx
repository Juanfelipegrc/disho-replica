import React from 'react'
import { breadBanner, shape, wasteFoodNoShape, wasteFoodNoShapeLg } from '../../../assets'

export const Section3Shop3 = () => {
  return (
    <>
    
    
    <div className="container-fluid my-5 container-lg p-2 p-md-0 shadow border rounded-5 bg-white position-relative overflow-hidden height-banner-glass-bottles">
                    <div className="col-12 card border-0 rounded-5 p-0">
                    <img className='border-0 rounded-5 card-img d-none d-md-none d-lg-block opacity-25 w-100 translate-middle-y mt-5' src={breadBanner} alt="..."/>
                    <img className='border-0 rounded-5 card-img d-none d-md-block d-lg-none opacity-25 translate-middle-y mt-5 w-100 ms-auto' src={breadBanner} alt="..."/>
                    <img className='border-0 rounded-5 card-img d-block d-md-none d-lg-none opacity-25' src={breadBanner} alt="..."/>
                    
                    <div className="card-img-overlay m-0 m-md-4 m-lg-4 d-flex flex-column justify-content-center align-items-center d-md-block d-lg-block">
                        <div className="container-fluid container-lg d-flex flex-column justify-content-center align-items-center d-md-block d-lg-block">
                        <h5 className='text-dark'>Weekly Discounts</h5>
                        <h1 className='text-danger font-big-1'>Up to 70% Off</h1>
                        <p className='text-dark text-center text-md-start text-lg-start fw-sans'>Maecenas posuere aliquam ligula et blandit. Praesent <br className='d-none d-md-block d-lg-none'/> tincidunt venenatis iaculis. Duis vehicula, <br className='d-none d-md-block d-lg-block'/> lorem eu sodales</p>
                        </div>
                    </div>
                    
                </div>
                </div>
    
    
    </>
  )
}
