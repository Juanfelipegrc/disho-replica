
import React from 'react'
import { List2ProductsHome3 } from '../List2ProductsHome3'
import { Counter } from '../../Counter'

export const Section5Home3 = () => {
  return (
    <>
    
        <div className="container-fluid cotainer-lg d-flex flex-column align-items-center p-0 m-0 my-5">
            <h3 className='text-center font-big-2  mb-3'>This Week's Hot Offer</h3>
            <div className="col-12 col-md-5 col-lg-4 d-flex justify-content-center mb-3">
              <div className="col-11 col-md-11 col-lg-10">
                <Counter/>
              </div>
            </div>
            <p className='text-center mb-2'>Vivamus non massa ipsum. Donec aliquam ante vel lobortis vestibulum. Nullam dictum leo est, eu luctus neque imperdiet sit amet. <br/> Fusce elit tellus, posuere</p>
            <List2ProductsHome3/>
        </div>
    
    </>
  )
}
