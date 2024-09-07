import React from 'react'
import { ListProductsHome2 } from '../ListProductsHome2'
import { Counter } from '../../Counter'

export const Section3Home2 = () => {
  return (
    <>
    
        <div className="container-fluid d-flex flex-column align-items-center my-5">
            <h3 className='text-center font-big-2 mb-3'>This Week's Hot Offer</h3>
            <div className="col-12 col-md-5 col-lg-4 d-flex justify-content-center mb-3">
              <div className="col-11 col-md-11 col-lg-10">
                <Counter/>
              </div>
            </div>
            <p className='text-center mb-2'>Vivamus non massa ipsum. Donec aliquam ante vel lobortis vestibulum. Nullam dictum leo est, eu luctus neque imperdiet sit amet. <br/> Fusce elit tellus, posuere</p>
            <ListProductsHome2/>
        </div>
    
    </>
  )
}
