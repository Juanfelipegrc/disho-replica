import React from 'react'

export const DiscountFirstShopping = () => {
  return (
    <>
        
        <div className="container-fluid py-5 bg-litle-gray">
            <div className="row d-flex flex-column flex-lg-row align-items-center justify-content-center py-3">
            <div className="col-12 col-lg-5">
                <div className="container ms-lg-5 text-center text-lg-start">
                    <h2 className='font-big-2'>Save 20% on the first shopping</h2>
                    <p className=''>Sign Up to Newsletter</p>
                </div>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center">
                <form className="d-flex col-9" role="search">
                    <input className="form-control shadow-none border-none rounded-start-pill p-3" type="email" placeholder="Email" aria-label="Email"/>
                    <button className="btn btn-litle-green text-white border rounded-end-pill px-5 d-flex align-items-center" type="submit"><i className="bi bi-send-fill me-2"></i> Send</button>
                </form>
            </div>
            </div>
        </div>   
        
    </>
  )
}
