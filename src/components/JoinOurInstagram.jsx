import React from 'react'
import { babyWatermelons, glassBottles, image2ListHome2, image3ListHome2, image4ListHome2, onlineFood } from '../assets'

export const JoinOurInstagram = () => {
  return (
    <>
    
    <div className="container-fluid d-flex justify-content-center p-0 m-0">
       <div className="container-fluid container-lg m-0 p-3 p-md-5 p-lg-5">
            <h1 className='text-center '>Join the Instagram</h1>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <p className='text-center m-0'>@disho-instagram</p>
                <hr className='border-3 border-litle-green opacity-100 col-1 m-0 mb-3'/>
            </div>
            <div className="row d-flex justify-content-center">
            <div className="col-6 col-md-4 col-lg-2 p-0 m-0 ">
                <div className='p-2'>
                    <div className="container-fluid border border-0 rounded-5 p-0 m-0 list-images-home-2 position-relative overflow-hidden">
                        <img className='img-fluid border border-0 rounded-5 w-100 h-100 object-fit-cover' src={glassBottles} alt="" />
                        <div className='w-100 h-100 d-flex position-absolute start-0 top-0 justify-content-center align-items-center overlay-black-image'>
                            <p className='m-0 '>Disho Juice</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 p-0 m-0 ">
                <div className="p-2">
                    <div className="container-fluid border border-0 rounded-5 p-0 m-0 list-images-home-2 position-relative overflow-hidden">
                        <img className='img-fluid border border-0 rounded-5 w-100 h-100 object-fit-cover' src={image2ListHome2} alt="" />
                        <div className='w-100 h-100 d-flex position-absolute start-0 top-0 justify-content-center align-items-center overlay-black-image'>
                            <p className='m-0 '>Fun Bakery</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 p-0 m-0 ">
                <div className="p-2">
                    <div className="container-fluid border border-0 rounded-5 p-0 m-0 list-images-home-2 position-relative overflow-hidden">
                        <img className='img-fluid border border-0 rounded-5 w-100 h-100 object-fit-cover' src={image3ListHome2} alt="" />
                        <div className='w-100 h-100 d-flex position-absolute start-0 top-0 justify-content-center align-items-center overlay-black-image'>
                            <p className='m-0 '>Seasonal Veggie</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 p-0 m-0 ">
                <div className="p-2">
                    <div className="container-fluid border border-0 rounded-5 p-0 m-0 list-images-home-2 position-relative overflow-hidden">
                        <img className='img-fluid border border-0 rounded-5 w-100 h-100 object-fit-cover' src={image4ListHome2} alt="" />
                        <div className='w-100 h-100 d-flex position-absolute start-0 top-0 justify-content-center align-items-center overlay-black-image'>
                            <p className='m-0 '>Seasonal Berry</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 p-0 m-0 ">
                <div className="p-2">
                    <div className="container-fluid border border-0 rounded-5 p-0 m-0 list-images-home-2 position-relative overflow-hidden">
                        <img className='img-fluid border border-0 rounded-5 w-100 h-100 object-fit-cover' src={onlineFood} alt="" />
                        <div className='w-100 h-100 d-flex position-absolute start-0 top-0 justify-content-center align-items-center overlay-black-image'>
                            <p className='m-0 '>Online Grosery</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 p-0 m-0 ">
                <div className="p-2">
                    <div className="container-fluid border border-0 rounded-5 p-0 m-0 list-images-home-2 position-relative overflow-hidden">
                        <img className='img-fluid border border-0 rounded-5 w-100 h-100 object-fit-cover' src={babyWatermelons} alt="" />
                        <div className='w-100 h-100 d-flex position-absolute start-0 top-0 justify-content-center align-items-center overlay-black-image'>
                            <p className='m-0 '>Seasonal Items</p>
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
