import React from 'react'
import { glassBottles, logo, shape, wasteFoodNoShape, wasteFoodNoShapeLg } from '../../../assets'

export const Section2SearchResults = () => {
  return (
    <>
    
    
        <div className="container-fluid container-md-fluid container-lg pb-5">
            <div className="row d-flex flex-column-reverse flex-md-row flex-lg-row justify-content-around align-items-center px-0 mt-5">
                <div className="col-12 col-md-8 col-lg-9 p-2 p-md-0 mt-3 mt-md-0 mt-lg-0 shadow border rounded-5 bg-white position-relative overflow-hidden height-banner-glass-bottles">
                    <div className="col-12 card border-0 rounded-5 p-0">
                    <img className='border-0 rounded-5 card-img d-none d-md-none d-lg-block opacity-50 w-75 ms-auto' src={wasteFoodNoShapeLg} alt="..."/>
                    <img className='border-0 rounded-5 card-img d-none d-md-block d-lg-none opacity-50 w-100 ms-auto' src={wasteFoodNoShapeLg} alt="..."/>
                    <img className='border-0 rounded-5 card-img d-block d-md-none d-lg-none opacity-50' src={wasteFoodNoShape} alt="..."/>
                    
                    <div className="card-img-overlay m-4 d-flex flex-column justify-content-center align-items-center d-md-block d-lg-block">
                        <div className="container d-flex flex-column justify-content-center align-items-center d-md-block d-lg-block">
                        <h5 className='text-dark'>Weekly Discounts</h5>
                        <h1 className='text-danger font-big-1'>Up to 70% Off</h1>
                        <p className='text-dark text-center text-md-start text-lg-start'>Maecenas posuere aliquam ligula et blandit. Praesent <br className='d-none d-md-block d-lg-block'/> tincidunt venenatis iaculis. Duis vehicula, lorem eu <br className='d-none d-md-block d-lg-block'/> sodales</p>
                        </div>
                    </div>
                    <div className='position-absolute start-50 w-75 overflow-hidden'>
                        <img className='object-fit-cover w-100 opacity-25' src={shape} alt="" />
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3 height-banner-glass-bottles">
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
    
    
    </>
  )
}
