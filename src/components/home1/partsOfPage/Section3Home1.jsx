import React from 'react'
import { BussinesInfo } from '../../BussinesInfo'

export const Section3Home1 = () => {
  return (
    <>
    
        <div className="container-fluid container-lg d-flex flex-column align-items-center p-0 mt-5">
            <h2 className='text-center font-big-2'>Best Sellers This Week</h2>
            <p className='text-center'>Vivamus non massa ipsum. Donec aliquam ante vel lobortis vestibulum. Nullam dictum leo est, eu luctus neque imperdiet sit amet. <br/> Fusce elit tellus, posuere</p>

            <div className="container-fluid p-0 m-0">
              <BussinesInfo/>
            </div>

        </div>


    
    </>
  )
}
