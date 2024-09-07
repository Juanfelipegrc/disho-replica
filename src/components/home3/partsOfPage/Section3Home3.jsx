import React from 'react'
import { onlyPears, shapeGreen } from '../../../assets'
import { ListProductsSide } from '../../ListProductsSide'
import { ListProductsHome3 } from '../ListProductsHome3'

export const Section3Home3 = () => {
  return (
    <>
    
          <div className="container-fluid">
            <div className="container-fluid container-lg mt-4 ">
              <div className="row d-flex justify-content-center px-0">
                  <div className='col-12 col-md-4 col-lg-4 d-flex flex-column align-items-center p-0 pe-0 pe-md-5 pe-lg-5'>
                    <div className="col-12 m-2 h-100 bg-white shadow-lg border rounded-4 py-3">
                      <h3 className='text-center  mb-3'>This Week's Hot Offer</h3>
                      <ListProductsSide/>
                  </div>
                  </div>
                  <div className="col-12 col-md-8 col-lg-8 border border-0 rounded-4 p-0 m-0 mt-4 mt-md-0 mt-lg-0">
                  <div className="container-fluid bg-white shadow border border-0 rounded-5 py-5 m-0 mb-4 position-relative overflow-hidden">
                    <div className="row d-flex justify-content-center justify-content-lg-start">
                      <div className="col-10 d-flex flex-column ms-lg-4 z-1 ">
                        <h4 className=' text-center text-lg-start'>Seasonal Sale</h4>
                        <p className='text-center text-lg-start'>Nam ornare consequat nunc et imperdiet. Fusce eu nisi maximus bibendum elit, eget aliquet magna urna sit amet</p>
                      </div>
                    </div>
                    {/* LG */}
                    <div className='position-absolute d-none d-md-none d-lg-block top-0 start-50 w-100 mb-n5'>
                      <img className='w-100 translate-middle mb-n5' src={onlyPears} alt="" />
                    </div>
                    <div className='position-absolute d-none d-md-none d-lg-block top-0 start-50 mt-n5 w-100'>
                      <img className='w-100 opacity-25 mt-n5 ' src={shapeGreen} alt="" />
                    </div>
                    {/* MD */}
                    <div className='position-absolute d-none d-md-block d-lg-none top-0 start-50 w-100 mt-5 mb-n5'>
                      <img className='w-100 mb-n5 translate-middle' src={onlyPears} alt="" />
                    </div>
                    <div className='position-absolute d-none d-md-block d-lg-none top-0 start-0 mt-5 w-100'>
                      <img className='w-100 opacity-25 mt-4 ' src={shapeGreen} alt="" />
                    </div>
                    {/* SM */}
                    <div className='position-absolute d-block d-md-none d-lg-none top-0 start-50 w-100 mt-5 mb-n5'>
                      <img className='w-100 mb-n5' src={onlyPears} alt="" />
                    </div>
                    <div className='position-absolute d-block d-md-none d-lg-none top-0 start-50 mt-3 w-100'>
                      <img className='w-100 opacity-25' src={shapeGreen} alt="" />
                    </div>

                  </div>
                  <div className='d-flex flex-column align-items-center align-items-md-start align-items-lg-start'>
                      <h2 className=''>Featured Products</h2>
                      <hr className="border-3 border-litle-green opacity-100 col-3"></hr>
                  </div>
                  <ListProductsHome3/>
                </div>
              </div>
            </div>
          </div>
    
    </>
  )
}
