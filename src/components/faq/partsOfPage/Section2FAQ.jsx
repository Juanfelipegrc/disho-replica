import React from 'react'
import { videoCover } from '../../../assets'
import { ModalFAQ } from '../ModalFAQ'

export const Section2FAQ = () => {
  return (
    <>
    
        <div className="container-fluid container-lg py-5">

            <div className="container-fluid d-flex align-items-center justify-content-center border border-0 rounded-4 overflow-hidden position-relative">
                <img role='button' className='w-100 border border-0 rounded-4 object-fit-cover' src={videoCover} alt="" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                <div className="position-absolute">
                    <button className='d-flex justify-content-center align-items-center btn bg-transparent border border-3 border-white rounded-circle px-4 py-4 px-lg-5 py-lg-5 position-relative' data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="font-big-1 ms-2 mt-1 object-fit-cover bi bi-play-fill text-white position-absolute "></i>
                    </button>
                </div>
            </div>

           <ModalFAQ>
                <div className="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/XHOmBV4js_E" title="YouTube video" allowFullScreen></iframe>
                </div>
           </ModalFAQ>
            
           

      
            

            
            

        </div>
    
    </>
  )
}
