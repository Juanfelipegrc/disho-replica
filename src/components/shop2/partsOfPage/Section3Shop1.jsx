import React from 'react'
import { ListProductsSide } from '../../ListProductsSide'
import { ListProductsHome1 } from '../../home1/ListProductsHome1'
import { Counter } from '../../Counter'

export const Section3Shop1 = () => {
  return (
    <>
    
        <div className="container-fluid">
          <div className="container-fluid container-md-fluid container-lg d-flex justify-content-center align-items-center mt-5 ">
                <div className="row col-12 d-flex justify-content-center">
                    <div className="col-12 col-md-4 col-lg-4 d-flex flex-column align-items-center bg-white shadow-lg border rounded-4 py-3 p-0">
                    <h3 className='text-center mb-3'>This Week's Hot Offer</h3>
                    <div className="col-11 col-md-11 col-lg-10">
                      <Counter dobleZero={'yes'}/>
                    </div>
                    <ListProductsSide/>
                    </div>
                    <div className="col-12 col-md-8 col-lg-8 p-0 ps-0 ps-md-4 ps-lg-4 mt-4 mt-md-0 mt-lg-0">
                      <div className='h-100 py-3 bg-white shadow-lg border rounded-4'>
                        <h3 className='text-center  mb-3'>Best Sellers this Week</h3>
                      
                        <ListProductsHome1/>
                      </div>
                    
                    </div>
                </div>
            </div>
        </div>

    
    </>
  )
}
