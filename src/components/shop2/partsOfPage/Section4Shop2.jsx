import React from 'react'
import { onlyPears, shapeGreen } from '../../../assets'
import { useNavigate } from 'react-router-dom'

export const Section4Shop2 = () => {

    const navigate = useNavigate();

    const onNavigateToShop = () => {
        navigate('/shop3')
    }

  return (
    <>
    
        <div className="container-fluid p-0 p-md-5 p-lg-5 m-0 mt-5 bg-white position-relative overflow-hidden">
           <div className="row overflow-hidden">
            
            <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center p-5 z-1">
                        <div className='d-flex flex-column align-items-center align-items-md-start align-items-lg-start'>
                            <h3 className=' py-3 px-3 bg-white bg-opacity-50 border border-0 rounded-pill d-inline-block text-center text-md-start text-lg-start'>Weekly Discounts</h3>
                            <h1 className=' text-danger font-big-1 text-center text-md-start text-lg-start'>Up to 70% Off</h1>
                            <button onClick={onNavigateToShop} className='btn btn-litle-green border py-3 px-4  border rounded-pill text-white text-center text-md-start text-lg-start'>View Discount Products</button>

                        </div>
                </div>
                <div className=" d-none d-md-flex d-lg-flex position-absolute translate-middle-y w-100 mt-5 overflow-hidden">
                    <img className='mt-5 w-100 h-100 object-fit-cover' src={onlyPears} alt="" />
                </div>


                <div className="p-0 d-flex d-md-none d-lg-none position-absolute translate-middle-y mt-5 overflow-hidden" style={{height:'30rem'}}>
                    <img className='mt-5 w-100 h-100 object-fit-cover' src={onlyPears} alt="" />
                </div>


                <div className="d-none d-md-none d-lg-flex position-absolute start-50 w-100 mt-n5 overflow-hidden">
                    <img className=' w-100 h-100 object-fit-cover opacity-25' src={shapeGreen} alt="" />
                </div>
                <div className="d-flex d-md-flex d-lg-none position-absolute start-0 w-100 mt-5 mt-md-n5 mt-lg-n5 overflow-hidden">
                    <img className=' w-100 h-100 object-fit-cover opacity-25' src={shapeGreen} alt="" />
                </div>
           </div>
        </div>
    
    </>
  )
}
