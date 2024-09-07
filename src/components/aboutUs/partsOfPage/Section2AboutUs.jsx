import React from 'react'
import { image2ListHome1, image2Section2AboutUs } from '../../../assets'

export const Section2AboutUs = () => {
  return (
    <>
    
        <div className="container-fluid container-lg d-flex flex-column gap-5 mt-5">
            <div className="row d-flex flex-column-reverse flex-md-row flex-lg-row">
                <div className="col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center ">
                    <div className='d-flex flex-column align-items-start mt-3 mt-md-0 mt-lg-0'>
                        <h2 className='m-0'>If you keep good food in your fridge, you will eat good foods</h2>
                        <hr className="border-4 border-litle-green opacity-100 col-3"></hr>
                    </div>
                    <p className='fw-sans'>Vestibulum volutpat sapien sed massa efficitur, scelerisque placerat enim pretium. Sed eget rutrum est. Vestibulum dictum dolor at diam lacinia gravida. In egestas, libero id cursus sagittis, quam odio tincidunt lacus, varius tempus odio justo ut est. Etiam et mi arcu. Sed mattis semper nulla, sed sagittis ex lobortis non. Etiam porttitor turpis id laoreet dictum. Nulla iaculis erat et ligula tincidunt vulputate. Nam lectus dui, imperdiet eu scelerisque eget, consequat id nisl. Integer consectetur leo sed ligula sodales, pellentesque convallis arcu tempor. Cras dignissim vel lorem eget sollicitudin</p>
                    <h4 className='mt-4'>Damian G. Bruno</h4>
                    <p>Owner and Founder</p>
                </div>
                <div className="col-12 col-md-6 col-lg-6 overflow-hidden border border-0 rounded-4">
                    <img className='w-100 h-100 object-fit-cover border border-0 rounded-4' src={image2ListHome1} alt="" />
                </div>
            </div>


            <div className="row">
                <div className="col-12 col-md-6 col-lg-6 overflow-hidden border border-0 rounded-4">
                    <img className='w-100 h-100 object-fit-cover border border-0 rounded-4' src={image2Section2AboutUs} alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center">
                    <div className='d-flex flex-column align-items-start mt-3 mt-md-0 mt-lg-0'>
                        <h2 className='m-0'>Our taste – Our identity</h2>
                        <hr className="border-4 border-warning opacity-100 col-3"></hr>
                    </div>
                    <p className='fw-sans'>Etiam et mi arcu. Sed mattis semper nulla, sed sagittis ex lobortis non. Etiam porttitor turpis id laoreet dictum. Nulla iaculis erat et ligula tincidunt vulputate</p>
                    
                </div>
            </div>

        </div>
    
    </>
  )
}
