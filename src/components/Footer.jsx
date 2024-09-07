import React from 'react'
import { logo, mastercard, paypal, visa } from '../assets'
import { Link, useLocation } from 'react-router-dom'

export const Footer = () => {
    const location = useLocation();
    const {pathname} = location;

  return (
        pathname === '/error'? <></>

        :

        <>
    
        <div className="container-fluid bg-white border-top pt-3 m-0 px-0">

            <div className="row d-flex justify-content-center me-0 p-4 p-lg-0">
                <div className="col-12 col-md-6 col-lg-3 ">
                    <div className="container p-0">
                        <div className="col-3">
                            <img className='img-fluid' src={logo} alt="" />
                        </div>
                        <div className="col-12">
                            <p className='text-start text-dark-blue fw-sans'>Ut elit tellus, luctus nec ullamcorper <br/> mattis, pulvinar dapibus leo.</p>
                        </div>
                        <div className="col-8">
                            <div className="row">
                                <div className="col">
                                    <i className="text-dark-blue bi bi-facebook"></i>
                                </div>
                                <div className="col">
                                    <i className="text-dark-blue bi bi-youtube"></i>
                                </div>
                                <div className="col">
                                    <i className="text-dark-blue bi bi-tiktok"></i>
                                </div>
                                <div className="col">
                                    <i className="text-dark-blue bi bi-twitter"></i>
                                </div>
                                <div className="col">
                                    <i className="text-dark-blue bi bi-pinterest"></i>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 mt-3">
                            <div className="row d-flex align-items-center">
                                <div className='col-2 container-fluid d-flex m-0'>
                                    <Link 
                                        to='' 
                                        className='btn btn-outline-litle-green text-litle-green link-white shadow fs-4 border-0 rounded-circle text-success link-light'
                                        
                                        >
                                            <i className="bi bi-geo-alt-fill"></i>
                                    </Link>
                                </div>
                                <div className="col-9">
                                    <p className=' m-0'>
                                        350 Bay Meadows St. <br/> Reynoldsburg, OH 43068
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 my-4">
                            <div className="row d-flex align-items-center">
                                <div className='col-2 container-fluid d-flex m-0'>
                                    <Link 
                                        to='' 
                                        className='btn btn-outline-litle-green text-litle-green link-white shadow fs-4 border-0 rounded-circle text-success link-light'
                                        
                                        >
                                            <i className="bi bi-headset"></i>
                                    </Link>
                                </div>
                                <div className="col-9">
                                    <p className='fw-sans text-dark-blue m-0'>
                                        Mon - Fri: 9:00 am - 9:00 pm <br/>
                                        <span className='text-dark'>+1-202-555-0168</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-2 mt-3">

                    <h4 className=''>Useful Links</h4>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link fw-sans text-dark-blue'>About Us</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link fw-sans text-dark-blue'>Contact Us</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link fw-sans text-dark-blue'>Shop by Categories</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link fw-sans text-dark-blue'>From the Blog</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link fw-sans text-dark-blue'>Cart</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link fw-sans text-dark-blue'>FAQ'S</Link>
                        </li>
                    </ul>

                </div>
                <div className="col-12 col-md-6 col-lg-2 mt-3">
                <h4 className=''>Customers Care</h4>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link fw-sans text-dark-blue'>My account</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link fw-sans text-dark-blue'>Payment & Delivery</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link fw-sans text-dark-blue'>FAQ</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link fw-sans text-dark-blue'>Customer Support</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link fw-sans text-dark-blue'>Licenses & Permits</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link fw-sans text-dark-blue'>Our Partners</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-2 mt-3">
                <h4 className=''>Product Categories</h4>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link p-0 pb-2 '><small className='text-dark-blue'><i className="bi bi-arrow-left-circle-fill text-litle-green"></i> &nbsp; Fruits & Vegetables</small></Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link p-0 pb-2 '><small className='text-dark-blue'> <i className="bi bi-arrow-left-circle-fill text-litle-green"></i> &nbsp; Snacks & Canned Goods</small></Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link p-0 pb-2 '><small className='text-dark-blue'> <i className="bi bi-arrow-left-circle-fill text-litle-green"></i> &nbsp; Cereal & Bakery</small></Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link p-0 pb-2 '><small className='text-dark-blue'> <i className="bi bi-arrow-left-circle-fill text-litle-green"></i> &nbsp; Coffe & Tea</small></Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link p-0 pb-2 '><small className='text-dark-blue'> <i className="bi bi-arrow-left-circle-fill text-litle-green"></i> &nbsp; Herbs & Spices</small></Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link p-0 pb-2 '><small className='text-dark-blue'> <i className="bi bi-arrow-left-circle-fill text-litle-green"></i> &nbsp; Oil & Sauces</small></Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link p-0 pb-2 '><small className='text-dark-blue'> <i className="bi bi-arrow-left-circle-fill text-litle-green"></i> &nbsp; Own Production</small></Link>
                        </li>
                        
                    </ul>
                </div>
            </div>

        <div className="container-fluid bg-light p-4 m-0">
            <div className="row d-flex align-items-center">
                <div className="col-4">
                    <span className='text-secondary  ms-auto d-none d-lg-block'>Copyright <i className="bi bi-c-circle"></i> Juan Felipe García Rojas</span>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <button className='btn bg-white border border-0 rounded-circle fs-5 py-3 px-4'>
                        <i className="bi bi-caret-up-fill"></i>
                    </button>
                </div>
                <div className="col-4">
                    <div className="row d-none d-lg-flex align-items-center gap-4">
                        <div className="col-2">
                            <img className='img-fluid' src={visa} alt="" />
                        </div>
                        <div className="col-2">
                            <img className='img-fluid' src={mastercard} alt="" />
                        </div>
                        <div className="col-2">
                            <img className='img-fluid' src={paypal} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    
    </>
  )
}
