import React from 'react'
import { banner2LgAboutUs, banner2MdAboutUs } from '../../../assets'
import { Link } from 'react-router-dom'

export const Section3AboutUs = () => {
  return (
    <>
    

        <div className="container-fluid d-none d-md-none d-lg-block card border border-0 p-0 mt-5 m-0 postion-relative overflow-hidden">
            
            <img className='card-img w-100 m-0 p-0' src={banner2LgAboutUs} alt="" />
            
            <div className="card-img-overlay">
                <div className="d-flex h-100 justify-content-center align-items-center">
                    <div className="row d-flex justify-content-center align-items-start">
                        <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center">
                            <button className='btn btn-litle-green border border-0 rounded-circle position-relative d-flex justify-content-center align-items-center' style={{padding:'2.1rem'}}><i className="bi bi-gem position-absolute text-white font-big-2 button-about-us-padding"></i></button>
                            <Link className='text-center mt-3 text-black text-decoration-none fs-3'>Quality & Fresh Products</Link>
                            <p className='fw-sans text-center text-dark-blue'>Maecenas arcu ex, ullamcorper placerat iaculis sed, feugiat eget magna. Nam condimentum convallis nisl at dignissim. Etiam viverra velit sed odio aliquam, vitae varius dui pulvinar</p>
                        </div>
                        <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center">
                            <button className='btn btn-litle-green border border-0 rounded-circle position-relative d-flex justify-content-center align-items-center' style={{padding:'2.1rem'}}><i className="bi bi-tree position-absolute text-white font-big-2 button-about-us-padding"></i></button>
                            <Link className='text-center mt-3 text-black text-decoration-none fs-3'>Ecological and organic</Link>
                            <p className='fw-sans text-center text-dark-blue'>Etiam porttitor turpis id laoreet dictum. Nulla iaculis erat et ligula tincidunt vulputate. Nam lectus dui, imperdiet eu scelerisque eget, consequat id nisl</p>
                        </div>
                        <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center">
                            <button className='btn btn-litle-green border border-0 rounded-circle position-relative d-flex justify-content-center align-items-center' style={{padding:'2.1rem'}}><i className="bi bi-box-seam position-absolute text-white font-big-2 button-about-us-padding"></i></button>
                            <Link className='text-center mt-3 text-black text-decoration-none fs-3'>The Best Suppliers</Link>
                            <p className='fw-sans text-center text-dark-blue'>In et nulla semper, posuere risus eget, placerat ipsum. Ut vel velit vitae mauris sodales feugiat vel eu arcu. Fusce ac turpis ut nisl eleifend gravida</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        {/* MD & SM */}

        <div className="container-fluid d-flex d-md-flex align-items-center d-lg-none card border border-0 p-0 mt-5 m-0 postion-relative overflow-hidden">
            
            <img className='card-img m-0 p-0' style={{width:'100rem'}} src={banner2MdAboutUs} alt="" />
            
            <div className="card-img-overlay">
                <div className="d-flex h-100 justify-content-center align-items-center">
                    <div className="row d-flex justify-content-center align-items-start">
                        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                            <button className='btn btn-litle-green border border-0 rounded-circle position-relative d-flex justify-content-center align-items-center' style={{padding:'2.1rem'}}><i className="bi bi-gem position-absolute text-white font-big-2 button-about-us-padding"></i></button>
                            <Link className='text-center mt-3 text-black text-decoration-none fs-3'>Quality & Fresh Products</Link>
                            <p className='fw-sans text-center text-dark-blue'>Maecenas arcu ex, ullamcorper placerat iaculis sed, feugiat eget magna. Nam condimentum convallis nisl at dignissim. Etiam viverra velit sed odio aliquam, vitae varius dui pulvinar</p>
                        </div>
                        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                            <button className='btn btn-litle-green border border-0 rounded-circle position-relative d-flex justify-content-center align-items-center' style={{padding:'2.1rem'}}><i className="bi bi-tree position-absolute text-white font-big-2 button-about-us-padding"></i></button>
                            <Link className='text-center mt-3 text-black text-decoration-none fs-3'>Ecological and organic</Link>
                            <p className='fw-sans text-center text-dark-blue'>Etiam porttitor turpis id laoreet dictum. Nulla iaculis erat et ligula tincidunt vulputate. Nam lectus dui, imperdiet eu scelerisque eget, consequat id nisl</p>
                        </div>
                        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                            <button className='btn btn-litle-green border border-0 rounded-circle position-relative d-flex justify-content-center align-items-center' style={{padding:'2.1rem'}}><i className="bi bi-box-seam position-absolute text-white font-big-2 button-about-us-padding"></i></button>
                            <Link className='text-center mt-3 text-black text-decoration-none fs-3'>The Best Suppliers</Link>
                            <p className='fw-sans text-center text-dark-blue'>In et nulla semper, posuere risus eget, placerat ipsum. Ut vel velit vitae mauris sodales feugiat vel eu arcu. Fusce ac turpis ut nisl eleifend gravida</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    
    
    </>
  )
}
