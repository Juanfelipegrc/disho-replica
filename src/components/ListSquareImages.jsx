import React from 'react'
import { image1ListHome1, image2ListHome1, image3ListHome1, image4ListHome1, image5ListHome1, image6ListHome1 } from '../assets'

export const ListSquareImages = () => {
  return (
    <>
    
        <div className="container-fluid m-0 p-0">
            <div className="row">
            <div className="col-6 col-md-4 col-lg-2 p-0 m-0 position-relative overflow-hidden">
                <img className='img-fluid' src={image1ListHome1} alt="" />
                <div className='w-100 h-100 d-flex position-absolute start-0 top-0 justify-content-center align-items-center overlay-black-image'>
                    <p className='m-0'>@dishogrocery_instagram</p>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 p-0 m-0 position-relative overflow-hidden">
                <img className='img-fluid' src={image2ListHome1} alt="" />
                <div className='w-100 h-100 d-flex position-absolute start-0 top-0 justify-content-center align-items-center overlay-black-image'>
                    <p className='m-0'>@dishogrocery_instagram</p>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 p-0 m-0 position-relative overflow-hidden">
                <img className='img-fluid' src={image3ListHome1} alt="" />
                <div className='w-100 h-100 d-flex position-absolute start-0 top-0 justify-content-center align-items-center overlay-black-image'>
                    <p className='m-0'>@dishogrocery_instagram</p>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 p-0 m-0 position-relative overflow-hidden">
                <img className='img-fluid' src={image4ListHome1} alt="" />
                <div className='w-100 h-100 d-flex position-absolute start-0 top-0 justify-content-center align-items-center overlay-black-image'>
                    <p className='m-0'>@dishogrocery_instagram</p>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 p-0 m-0 position-relative overflow-hidden">
                <img className='img-fluid' src={image5ListHome1} alt="" />
                <div className='w-100 h-100 d-flex position-absolute start-0 top-0 justify-content-center align-items-center overlay-black-image'>
                    <p className='m-0'>@dishogrocery_instagram</p>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 p-0 m-0 position-relative overflow-hidden">
                <img className='img-fluid' src={image6ListHome1} alt="" />
                <div className='w-100 h-100 d-flex position-absolute start-0 top-0 justify-content-center align-items-center overlay-black-image'>
                    <p className='m-0'>@dishogrocery_instagram</p>
                </div>
            </div>

            </div>
        </div>
    
    </>
  )
}
