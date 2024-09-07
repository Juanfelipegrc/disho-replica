import React from 'react'
import { cakeMacaron, lemonsBanner, strawberries } from '../../../assets'
import { useNavigate } from 'react-router-dom'

export const Section2Categories = () => {
  const navigate = useNavigate();

  const onNavigateToShop = () => {
    navigate('/shop2')
  }
  return (
    <>
    
        <div className="container-fluid container-lg">
            <div className="container-fluid my-5">
                  <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-12 col-md-2 col-lg-2 my-3 my-lg-0">
                      <div className='ratio ratio-4x3 delivery-services-container'>
                        <img className='w-100 object-fit-cover border border-0 rounded-5 card-img' src={cakeMacaron} alt="" />
                        <div className="card-overlay d-flex justify-content-center justify-content-md-end  justify-content-lg-end align-items-center">
                          <h1 className='fs-4  text-white me-2 d-none d-md-block d-lg-block'>Disho <br/> Bakery</h1>
                          <h1 className='fs-2  text-white me-2 d-block d-md-none d-lg-none'>Disho Bakery</h1>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-8 my-3 my-lg-0">
                      <div className='ratio ratio-21x9 delivery-services-container'>
                        <img className='w-100 object-fit-cover border border-0 rounded-5 card-img' src={lemonsBanner} alt="" />
                        <div className="card-overlay d-flex flex-column justify-content-center align-items-center">
                  
                          <div>
                            <h2 className=' text-center'>Fast Delivery Services</h2>
                          </div>
                          
                          <button onClick={onNavigateToShop} className='btn btn-outline-litle-green text-dark border border-2 border-dark link-light py-2 px-4 rounded-pill button-outline-litle-green-hover'>Shop now</button>

                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-2 col-lg-2 my-3 my-lg-0">
                      <div className='ratio ratio-4x3 delivery-services-container'>
                        <img className='w-100 object-fit-cover border border-0 rounded-5 card-img' src={strawberries} alt="" />
                        <div className="card-overlay d-flex align-items-center justify-content-center justify-content-lg-start ms-0 ms-lg-3">
                          <h1 className='fs-4  text-white d-none d-md-block d-lg-block'>Seasonal <br/> Fresh Items</h1>
                          <h1 className='fs-2  text-white d-block d-md-none d-lg-none'>Seasonal Fresh Items</h1>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
    
    
    </>
  )
}
