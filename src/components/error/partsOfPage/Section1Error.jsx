import React from 'react'
import { bannerError } from '../../../assets'
import { useNavigate } from 'react-router-dom'

export const Section1Error = () => {

    const navigate = useNavigate();

    const onNavigateHome = () => {
        navigate('/')
    }
  return (
    <>
    
        <div className="container-fluid m-0 p-0 h-100 w-100">
            <img className='w-100 h-100 opacity-50 object-fit-cover card-img' src={bannerError} alt="" />
            <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                <h1 className='font-big-1 mb-5'>404</h1>
                <h2 className='font-big-2'>PAGE NOT FOUND</h2>
                <button onClick={onNavigateHome} className='btn btn-litle-green py-3 px-4 border border-0 rounded-pill text-white button-litle-green-hover'>Back to Home Page</button>
            </div>
        </div>
    
    </>
  )
}
