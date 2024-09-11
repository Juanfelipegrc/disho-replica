import React from 'react'
import { milkHome1, vegetalsHome1, watermelonHome1 } from '../../../assets'

export const Section2Home1 = () => {
  return (
    <>
                
            <div className="row px-4 px-lg-0 d-flex justify-content-center mt-1 mt-lg-n5 mb-5">


              
              {/* IMAGE 1 */}

              {/* LG */}
              <div className="col-12 col-lg-3 d-none d-md-none d-lg-block">
                <img className='img-fluid border col-12 rounded-5 shadow-lg mt-4 mt-lg-n1 position-relative' src={watermelonHome1} alt="" />
              </div>

              {/* MD */}

              <div className="col-12 col-lg-3 d-none d-md-flex d-lg-none overflow-hidden p-0 my-4 justify-content-center align-items-center border border-0 rounded-5 shadow-lg" style={{height: '19rem'}}>
                <img className='img-fluid border col-12 h-100 object-fit-cover rounded-4 position-relative' src={watermelonHome1} alt="" />
              </div>

              {/* SM */}

              <div className="col-12 col-lg-3 d-flex d-md-none d-lg-none overflow-hidden p-0 my-3 justify-content-center align-items-center border border-0 rounded-5 shadow-lg" style={{height: '14rem'}}>
                <img className='img-fluid border col-12 h-100 object-fit-cover rounded-4 position-relative' src={watermelonHome1} alt="" />
              </div>






              {/* IMAGE 2 */}

              {/* LG */}
              <div className="col-12 col-lg-3 d-none d-md-none d-lg-block">
                <img className='img-fluid border col-12 rounded-5 shadow-lg mt-4 mt-lg-n5 position-relative' src={vegetalsHome1} alt="" />
              </div>

              {/* MD */}

              <div className="col-12 col-lg-3 d-none d-md-flex d-lg-none overflow-hidden p-0 my-4 justify-content-center align-items-center border border-0 rounded-5 shadow-lg" style={{height: '19rem'}}>
                <img className='img-fluid border col-12 h-100 object-fit-cover rounded-4 position-relative' src={vegetalsHome1} alt="" />
              </div>

              {/* SM */}

              <div className="col-12 col-lg-3 d-flex d-md-none d-lg-none overflow-hidden p-0 my-3 justify-content-center align-items-center border border-0 rounded-5 shadow-lg" style={{height: '14rem'}}>
                <img className='img-fluid border col-12 h-100 object-fit-cover rounded-4 position-relative' src={vegetalsHome1} alt="" />
              </div>







              {/* IMAGE 3 */}

              {/* LG */}
              <div className="col-12 col-lg-3 d-none d-md-none d-lg-block">
                <img className='img-fluid border col-12 rounded-5 shadow-lg mt-4 mt-lg-n2 position-relative' src={milkHome1} alt="" />
              </div>

              {/* MD */}

              <div className="col-12 col-lg-3 d-none d-md-flex d-lg-none overflow-hidden p-0 my-4 justify-content-center align-items-center border border-0 rounded-5 shadow-lg" style={{height: '19rem'}}>
                <img className='img-fluid border col-12 h-100 object-fit-cover rounded-4 position-relative' src={milkHome1} alt="" />
              </div>

              {/* SM */}

              <div className="col-12 col-lg-3 d-flex d-md-none d-lg-none overflow-hidden p-0 my-3 justify-content-center align-items-center border border-0 rounded-5 shadow-lg" style={{height: '14rem'}}>
                <img className='img-fluid border col-12 h-100 object-fit-cover rounded-4 position-relative' src={milkHome1} alt="" />
              </div>


            </div>
    
    
    </>
  )
}
