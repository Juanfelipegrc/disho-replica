import React from 'react'
import { bannerHome1 } from '../../../assets'
import { useNavigate } from 'react-router-dom'

export const Section1Home1 = () => {

  const navigate = useNavigate();

  const onNavigate = (path) => {
    navigate(path)
  }
  return (
    <>
    
        <div className="row d-flex flex-column-reverse flex-lg-row justify-content-end">


            <div className="col-12 col-lg-5 d-flex
            flex-column justify-content-center align-items-center p-4">
            <h1 className='col-12 text-dark text-center text-lg-start font-big-1'>Check out our Best <br className='d-none d-md-block d-lg-block'/> Weekly Prices</h1>
            <p className='text-secondary text-center text-lg-start'>Vestibulum ornare purus sapien, eu tempus turpis pellentesque vitae. In hac habitasse platea dictumst. Nunc sapien lectus, aliquam a semper ege</p>

            <div className="row col-12 d-flex justify-content-center justify-content-lg-start">
            <div className="col-12 col-md-4 col-lg-6 d-flex justify-content-center">
                <button onClick={() => onNavigate('/categories/uncategorized')} className='btn btn-litle-green border fs-6 fs-lg-3 text-white rounded-pill p-0 col-12 py-3 px-5 m-1'>View Sole Products</button>
            </div>
            <div className="col-12 col-md-4 col-lg-6 d-flex justify-content-center">
                <button onClick={() => onNavigate('/shop2')} className='btn btn-outline-dark-blue border fs-6 fs-lg-3 border-2 border-dark-blue rounded-pill p-0 col-12 py-3 px-5 m-1'>Shop All Products</button>
            </div>

            </div>

            </div>


            <div className="col-12 col-lg-7 position-relative d-flex justify-content-end overflow-hidden me-n5">
            <img className='img-fluid me-n5' src={bannerHome1} alt="" />
            <div className="spinner me-n5"></div>
            </div>
        </div>
    
    </>
  )
}
