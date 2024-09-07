import React from 'react'
import { glassBottles, logo, wasteFoodNoShapeLg } from '../../../assets'

export const Section7Home2 = () => {
  return (
    <>
    

        <div className="container-fluid">
            <div className="container-fluid container-md-fluid container-lg">
                <div className="row d-flex flex-column-reverse flex-md-row flex-lg-row justify-content-around align-items-center px-0 mt-5">
                    <div className='col-12 col-md-8 col-lg-9 p-0 p-md-2 p-lg-2 height-banner-glass-bottles'>
                        <div className="col-12 mt-4 mt-md-0 mt-lg-0 h-100 position-relative shadow border rounded-5 bg-white  overflow-hidden ">
                            <div className="col-12 h-100 card border-0 rounded-5 p-0">
                            <img className='border-0 rounded-5 opacity-50 w-100 h-100 object-fit-cover ms-auto' src={wasteFoodNoShapeLg} alt="..."/>
        
                            
                                <div className="card-img-overlay m-4 d-flex flex-column justify-content-center align-items-center d-md-block d-lg-block">
                                    <div className="container d-flex flex-column justify-content-center align-items-center d-md-block d-lg-block">
                                    <h5 className='text-dark'>Weekly Discounts</h5>
                                    <h1 className='text-danger font-big-1 text-center text-md-start text-lg-start'>Up to 70% Off</h1>
                                    <p className='text-dark text-center text-md-start text-lg-start'>Maecenas posuere aliquam ligula et blandit. Praesent <br className='d-none d-md-block d-lg-block'/> tincidunt venenatis iaculis. Duis vehicula, lorem eu <br className='d-none d-md-block d-lg-block'/> sodales</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 p-0 p-md-2 p-lg-2 height-banner-glass-bottles">
                        <div className="card col-12 p-0 border rounded-5 w-100 h-100">
                        <img className='border rounded-5 shadow card-img h-100' src={glassBottles} alt="..."/>
                        <div className="card-img-overlay d-flex justify-content-center align-items-center">
                            <div className="container bg-white border rounded-pill w-75 d-flex justify-content-center align-items-center">
                            <img className='w-75' src={logo} alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    
    </>
  )
}
