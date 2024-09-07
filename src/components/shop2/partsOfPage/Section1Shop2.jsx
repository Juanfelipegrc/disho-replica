import React from 'react'
import { ListProducts1 } from '../ListProducts1'
import { icon1Shop2, icon2Shop2, icon3Shop2, icon4Shop2, icon5Shop2, icon6Shop2, icon7Shop2, icon8Shop2 } from '../../../assets'

export const Section1Shop2 = () => {
  return (
    <>
    
        <div className="container-fluid container-lg pt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-4 col-lg-3 px-3">
                    <div className="container-fluid m-0 p-0 border rounded-4 bg-litle-green overflow-hidden">
                        <h4 className='text-center text-white  m-0 p-0 mt-3'>Products Categories</h4>
                        <div className="container-fluid m-0 p-0 pb-3 bg-white mt-3">
                            <ul className='list-unstyled d-flex flex-column align-items-center'>
                                <div className='py-2 w-75 d-flex'>
                                    <div className="col-2">
                                        <img className='w-75' src={icon1Shop2} alt="" />
                                    </div>
                                    <li className=' text-start'>Fruits & Vegetables</li>
                                </div>
                                <div className='py-2 w-75 d-flex'>
                                    <div className="col-2">
                                        <img className='w-75' src={icon2Shop2} alt="" />
                                    </div>
                                    <li className=' text-start'>Coffee & Tea</li>
                                </div>
                                <div className='py-2 w-75 d-flex'>
                                    <div className="col-2">
                                        <img className='w-75' src={icon3Shop2} alt="" />
                                    </div>
                                    <li className=' text-start'>Snacks & Canned Goods</li>
                                </div>
                                <div className='py-2 w-75 d-flex'>
                                    <div className="col-2">
                                        <img className='w-75' src={icon4Shop2} alt="" />
                                    </div>
                                    <li className=' text-start'>Herbs & Spices</li>
                                </div>
                                <div className='py-2 w-75 d-flex'>
                                    <div className="col-2">
                                        <img className='w-75' src={icon5Shop2} alt="" />
                                    </div>
                                    <li className=' text-start'>Own Production</li>
                                </div>
                                <div className='py-2 w-75 d-flex'>
                                    <div className="col-2">
                                        <img className='w-75' src={icon6Shop2} alt="" />
                                    </div>
                                    <li className=' text-start'>Cereal & Bakery</li>
                                </div>
                                <div className='py-2 w-75 d-flex'>
                                    <div className="col-2">
                                        <img className='w-75' src={icon7Shop2} alt="" />
                                    </div>
                                    <li className=' text-start'>Oil & Sauces</li>
                                </div>
                                <div className='py-2 w-75 d-flex'>
                                    <div className="col-2">
                                        <img className='w-75' src={icon6Shop2} alt="" />
                                    </div>
                                    <li className=' text-start'>Cereal & Bakery</li>
                                </div>
                                <div className='py-2 w-75 d-flex'>
                                    <div className="col-2">
                                        <img className='w-75' src={icon8Shop2} alt="" />
                                    </div>
                                    <li className=' text-start'>All Categories</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-8 col-lg-8">

                    <div className="row justify-content-between align-items-center my-3">
                        <div className="col-6 col-md-6 col-lg-3">
                            <p className='d-none d-md-block d-lg-block m-0'>Showing 1–10 of 42 results</p>
                            <p className='d-block d-md-none d-lg-none font-small-1 m-0'>Showing 1–10 of 42 results</p>
                        </div>

                        <div className="col-6 col-md-5 col-lg-3">
                        <div className="dropdown">
                            <button className="btn bg-white border border-0 rounded-2  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p className='m-0 me-5 d-inline-block'>Default Sorting</p>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item active" href="#">Default Sorting</a></li>
                                <li><a className="dropdown-item" href="#">Sort by popularity</a></li>
                                <li><a className="dropdown-item" href="#">Sort by average rating</a></li>
                                <li><a className="dropdown-item" href="#">Sort by latest</a></li>
                                <li><a className="dropdown-item" href="#">Sort by price: low to hight</a></li>
                                <li><a className="dropdown-item" href="#">Sort by price: hight to low</a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <ListProducts1/>
                    <div className="container-fluid d-flex justify-content-center">
                    <nav aria-label="...">
                    <ul className="pagination">
                        <li className="page-item disabled">
                        <a className="page-link">Previous</a>
                        </li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item" aria-current="page">
                        <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                    </nav>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}
