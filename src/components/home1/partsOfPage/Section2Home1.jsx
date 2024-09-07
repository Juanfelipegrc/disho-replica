import React from 'react'
import { milkHome1, vegetalsHome1, watermelonHome1 } from '../../../assets'

export const Section2Home1 = () => {
  return (
    <>
                
            <div className="row d-flex justify-content-center mt-1 mt-lg-n5 mb-5">
              <div className="col-12 col-lg-3">
                <img className='img-fluid border col-12 rounded-4 shadow-lg mt-4 mt-lg-n1 position-relative' src={watermelonHome1} alt="" />
              </div>
              <div className="col-12 col-lg-3">
                <img className='img-fluid border col-12 rounded-4 shadow-lg mt-4 mt-lg-n5 position-relative' src={vegetalsHome1} alt="" />
              </div>
              <div className="col-12 col-lg-3">
                <img className='img-fluid border col-12 rounded-4 shadow-lg mt-4 mt-lg-n2 position-relative' src={milkHome1} alt="" />
              </div>
            </div>
    
    
    </>
  )
}
