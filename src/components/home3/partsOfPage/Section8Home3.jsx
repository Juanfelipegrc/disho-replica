import React from 'react'
import { healthyFood } from '../../../assets'

export const Section8Home3 = () => {
  return (
    <>
        <div className="container-fluid d-flex align-items-center justify-content-center container-fluid position-relative bg-middle-gray py-5 m-0 overflow-hidden">
            <div className="row">
                <div className="d-none d-lg-block position-absolute top-0 start-0">
                <img className='w-25' src={healthyFood} alt="" />
                </div>
                <div className="d-none d-md-block d-lg-none position-absolute top-0 start-0 mt-n5">
                <img className='w-100 opacity-75' src={healthyFood} alt="" />
                </div>
                <div className="d-block d-md-none d-lg-none position-absolute top-0 end-100 mt-n5">
                <img className=' opacity-75 mt-n5' src={healthyFood} alt="" />
                </div>
                <div className="col-12 d-flex flex-column justify-content-center align-items-center z-1">

                <h1 className=' text-center my-0 my-md-4 my-lg-4 font-big-1'>Order Home <br className='d-block d-md-none d-lg-none'/> Delivery of <br className='d-block d-md-none d-lg-block'/> Groceries</h1>


                <p className='text-center my-4'>Suspendisse potenti. Donec condimentum finibus massa, at sagittis metus egestas a. <br className='d-block d-mg-none d-lg-none'/> Nunc <br className='d-none d-md-block d-lg-block'/> commodo facilisis lectus sed congue. <br className='d-block d-mg-none d-lg-none'/> Aenean a sem quis urna fermentum porttitor. <br/> Aenean in aliquet velit</p>



                <div className='bg-white border-0 rounded-pill text-litle-green  py-4 px-5 d-none d-lg-flex justify-content-center align-items-center w-75 text-center'><p className='m-0 fs-4'><i className="bi bi-headset"></i> +1-202-555-0168</p></div>
                <div className='bg-white border-0 rounded-pill text-litle-green  py-4 px-5 d-none d-md-block d-lg-none justify-content-center align-items-center w-50 text-center'><p className='m-0 fs-5'><i className="bi bi-headset"></i> +1-202-555-0168</p></div>
                <div className='bg-white border-0 rounded-pill text-litle-green  py-4 px-5 d-flex d-md-none d-lg-none justify-content-center align-items-center w-100 text-center'><p className='m-0 fs-4'><i className="bi bi-headset"></i> +1-202-555-0168</p></div>
                </div>
                
            </div>
        </div>
    
    
    </>
  )
}
