import React from 'react'
import { Link } from 'react-router-dom'
import {MapContainer, Marker, TileLayer, Popup} from 'react-leaflet'
export const Section2Contact = () => {

    const position = [51.50539095894784, -0.12032543638834191]
  return (
    <>
    
        <div className="container-fluid container-lg p-4 p-lg-0">
            <div className="container-fluid border border-0 rounded-5 shadow-lg z-1 bg-white position-relative mt-n5 ">

                <div className="row">
                    <div className="col-12 col-lg-6 p-5">
                        <div className='d-flex flex-column align-items-center align-items-md-start align-items-lg-start'>
                            <h2 className='m-0'>Contact Us</h2>
                            <hr className="border-4 border-warning opacity-100 col-2"></hr>
                            <div className="row">
                                <div className="col">
                                    <i style={{fontSize:'1.3rem'}} className="text-dark-blue bi bi-facebook"></i>
                                </div>
                                <div className="col">
                                    <i style={{fontSize:'1.3rem'}} className="text-dark-blue bi bi-youtube"></i>
                                </div>
                                <div className="col">
                                    <i style={{fontSize:'1.3rem'}} className="text-dark-blue bi bi-tiktok"></i>
                                </div>
                                <div className="col">
                                    <i style={{fontSize:'1.3rem'}} className="text-dark-blue bi bi-twitter"></i>
                                </div>
                                <div className="col">
                                    <i style={{fontSize:'1.3rem'}} className="text-dark-blue bi bi-pinterest"></i>
                                </div>
                            </div>


                            <p className='fw-sans text-center text-md-start text-lg-start'>Nam lectus dui, imperdiet eu scelerisque eget, consequat id nisl. Integer consectetur leo sed ligula sodales, pellentesque convallis arcu tempor</p>


                            <div className="col-12 mt-3">
                                <div className="row d-flex flex-column flex-md-row flex-lg-row align-items-center">
                                    <div className='col-1 container-fluid d-flex m-0 p-0 mb-2 mb-md-0 mb-lg-0'>
                                        <Link 
                                            to='' 
                                            className='btn btn-outline-litle-green text-litle-green link-white shadow fs-4 border-0 rounded-circle text-success link-light'
                                            
                                            >
                                                <i className="bi bi-geo-alt-fill"></i>
                                        </Link>
                                    </div>
                                    <div className="col-9">
                                        <p className='m-0 text-center text-md-start text-lg-start'>
                                            350 Bay Meadows St. Reynoldsburg, OH 43068
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 my-4">
                                <div className="row d-flex flex-column flex-md-row flex-lg-row align-items-center">
                                    <div className='col-1 container-fluid d-flex m-0 p-0 mb-2 mb-md-0 mb-lg-0'>
                                        <Link 
                                            to='' 
                                            className='btn btn-outline-litle-green text-litle-green link-white shadow fs-4 border-0 rounded-circle text-success link-light'
                                            
                                            >
                                                <i className="bi bi-headset"></i>
                                        </Link>
                                    </div>
                                    <div className="col-9">
                                        <p className='m-0 text-center text-md-start text-lg-start'>
                                            +1-202-555-0168
                                        </p>
                                    </div>
                                </div>
                            </div>


                            
                        </div>
                    </div>
                    {/* LG */}
                    <div className="d-none d-md-none d-lg-block col-lg-6 p-0 m-0 border border-0 rounded-end-5 overflow-hidden">
                        <MapContainer className='w-100 h-100 object-fit-cover' center={position} zoom={13}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={position}>
                            <Popup>
                                lastminute.com <br /> London Eye
                            </Popup>
                        </Marker>
                            

                        </MapContainer>
                    </div>

                    {/* MD */}
                    <div className="col-12 d-block d-md-block d-lg-none p-0 m-0 border border-0 rounded-bottom-5 overflow-hidden slider-home-3">
                        <MapContainer className='w-100 h-100 object-fit-cover' center={position} zoom={13}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={position}>
                            <Popup>
                                lastminute.com <br /> London Eye
                            </Popup>
                        </Marker>
                            

                        </MapContainer>
                    </div>
                </div>

            </div>

        </div>
        
    </>
  )
}
