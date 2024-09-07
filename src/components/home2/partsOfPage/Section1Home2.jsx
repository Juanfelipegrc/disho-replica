import React, { useEffect } from 'react'
import { berrieCake, berrieBrownieBanner, lentisBanner, potatoSnacksBanner, milkBanner } from '../../../assets'
import { Link, useNavigate } from 'react-router-dom'

export const Section1Home2 = () => {
    

    const navigate = useNavigate();

    
    useEffect(() => {
        const carousel = document.getElementById('carouselHome2');
        let bootstrapCarousel;
        if(carousel){
            bootstrapCarousel = new window.bootstrap.Carousel(carousel, {
                interval: 3000,
                ride:'carousel'
            });
        }
        return () => {
          bootstrapCarousel.dispose();
        }
      }, []);

      const onNavigateToShop = () => {
        navigate('/shop2')
      }

  return (
    <>
    
        <div className="container-fluid container-lg d-flex justify-content-center m-0 p-0">
            <div className="row col-12 d-flex justify-content-center">
                <div className=' col-12 col-md-12 col-lg-8'>
                    <div className="col-12 border-0 d-flex flex-column justify-content-center align-items-center shadow border rounded-5 overflow-hidden p-0 py-2 py-lg-0 bg-white h-100">

                        <div id="carouselHome2" className="carousel carousel-dark slide h-100" data-bs-ride="carousel">

                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselHome2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselHome2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselHome2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>

                            <div className="carousel-inner ">
                                <div className="carousel-item active">
                                    <div className="container-fluid card border-0 m-0 p-0 py-5 py-lg-0">
                                        <img src={berrieBrownieBanner} className="card-img me-n5 pt-5" alt="..."/>
                                        <div className="card-img-overlay m-3">
                                            <h1 className=' text-danger font-big-1 text-start'>Up to 70% Off</h1>
                                            <p className=''>Check out our Best Weekly Prices for Chocolate Cakes</p>
                                            <button onClick={onNavigateToShop} className='btn btn-outline-dark border-2 rounded-pill py-2 px-4 fw-semibold'>Shop All</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="container-fluid card border-0 m-0 p-0 py-5 py-lg-0">
                                        <img src={potatoSnacksBanner} className="card-img me-n5 pt-5" alt="..."/>
                                        <div className="card-img-overlay m-3">
                                            <h1 className=' text-danger font-big-1 text-start'>Up to 70% Off</h1>
                                            <p className=''>Check out our Best Weekly Prices for Potatos Chips</p>
                                            <button onClick={onNavigateToShop} className='btn btn-outline-dark border-2 rounded-pill py-2 px-4 fw-semibold'>Shop All</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="container-fluid card border-0 m-0 p-0 py-5 py-lg-0">
                                        <img src={milkBanner} className="card-img me-n5 pt-5" alt="..."/>
                                        <div className="card-img-overlay m-3">
                                            <h1 className=' text-danger font-big-1 text-start'>Up to 70% Off</h1>
                                            <p className=''>Check out our Best Weekly Prices for Milk</p>
                                            <button onClick={onNavigateToShop} className='btn btn-outline-dark border-2 rounded-pill py-2 px-4 fw-semibold'>Shop All</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>


                    </div>
                </div>



               <div className=' ps-md-2 ps-lg-2 col-12 col-lg-4 p-lg-0 mt-2 mt-md-0 mt-lg-0 pt-0 pt-md-2 pt-lg-0'>
                <div className="container-fluid h-100 m-0 col-12">
                        <div className="row h-100 d-flex">
                            <div className='p-0 p-lg-3 pt-0'>
                                <div className="col-12 align-self-start card shadow border rounded-5 p-0 pt-5">
                                    <img className='w-100 align-self-end border border-0 rounded-5 card-img' src={lentisBanner} alt="" />
                                    <div className="card-img-overlay m-3">
                                        <h3 className=''>Cereals And Seeds</h3>
                                        <Link className=' text-decoration-none text-dark'>Shop now <i className="bi bi-arrow-right-circle-fill text-litle-green"></i></Link>
                                    </div> 
                                </div>
                            </div>
                            <div className="p-0 p-lg-3 pb-0">
                                <div className="col-12 align-self-end card shadow border rounded-5 mt-2 mt-lg-0 p-0">
                                    <img className='w-100 border border-0 rounded-5 card-img' src={berrieCake} alt="" />
                                    <div className="card-img-overlay m-3">
                                        <h3 className=''>Disho Bakery</h3>
                                        <Link className=' text-decoration-none text-dark'>Shop now <i className="bi bi-arrow-right-circle-fill text-litle-green"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    
    
    </>
  )
}
