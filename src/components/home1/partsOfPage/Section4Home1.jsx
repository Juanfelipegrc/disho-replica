import React from 'react'
import { ListProductsSide } from '../../ListProductsSide'
import { ListProductsHome1 } from '../ListProductsHome1'
import { Counter } from '../../Counter'

export const Section4Home1 = () => {
  return (
    <>
    
        <div className="container-fluid container-md-fluid container-lg d-flex justify-content-center mt-5 p-0">
            <div className="row col-12 p-0 d-flex justify-content-center">
                <div className="col-12 col-md-4 col-lg-4 d-flex flex-column align-items-center p-0 pe-0 pe-md-3 pe-lg-5">
                <div className="col-12 h-100 d-flex flex-column align-items-center bg-white shadow-lg border rounded-4 py-4">
                  <h3 className='text-center mb-3'>This Week's Hot Offer</h3>
                  <div className="col-11 col-md-11 col-lg-10">
                    <Counter/>
                  </div>
                  <ListProductsSide/>
                </div>
                </div>
                <div className="col-12 col-md-8 col-lg-8 p-0 mt-4 mt-md-0 mt-lg-0">
                  <div className='.col-12 h-100 p-3 bg-white shadow-lg border rounded-4'>
                    <h3 className='text-center mb-3'>Best Sellers this Week</h3>
                  
                    <ListProductsHome1/>
                  </div>
                
                </div>
            </div>
        </div>
    
    
    </>
  )
}
