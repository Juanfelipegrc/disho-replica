import React, { useEffect } from 'react'
import { breadBanner, milkBanner, potatoSnacksBanner } from '../../../assets'
import { useNavigate } from 'react-router-dom';

export const Section1Home3 = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const carousel = document.getElementById('carouselExampleAutoplaying');
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
    

        <div className="container-fluid container-md-fluid container-lg border border-0 rounded-5 mt-5">
            <div id="carouselExampleAutoplaying" className="carousel carousel-dark slide bg-white border border-0 rounded-5 p-0 shadow" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner border-0 rounded-5 p-0">
                    <div className="carousel-item active">
                        {/* LG */}
                        <div className="container-fluid container-md-fluid container-lg slider-home-3 d-flex justify-content-center align-items-center d-none d-md-flex d-lg-flex p-0 ">
                            <div className='ms-0 ms-md-5 ms-lg-0'>
                                <h1 className=' text-danger font-big-1 d-none d-md-none d-lg-block text-start'>Up to 70% Off</h1>
                                <h1 className=' text-danger fs-1 d-none d-md-block d-lg-none text-start'>Up to 70% Off</h1>
                                <p className=''>Check out our Best Weekly Prices for Day Bakery</p>
                                <button onClick={onNavigateToShop} className='btn btn-outline-dark border-2 rounded-pill py-2 px-4 '>Shop All</button>
                            </div>
                            <img className='w-50 object-fit-cover mt-n5' src={breadBanner} alt="" />
                        </div>
                        {/* SM */}
                        <div className="container-fluid border border-0 rounded-5 d-block d-md-none d-lg-none card border-0 m-0 p-0 py-5 py-lg-0 ">
                            <img src={breadBanner} className="card-img me-n5 pt-5" alt="..."/>
                            <div className="card-img-overlay m-3">
                                <h1 className=' text-danger font-big-1 text-start'>Up to 70% Off</h1>
                                <p className=''>Check out our Best Weekly Prices for Day Bakery</p>
                                <button onClick={onNavigateToShop} className='btn btn-outline-dark border-2 rounded-pill py-2 px-4 '>Shop All</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* LG */}
                        <div className="container-fluid container-md-fluid container-lg slider-home-3 d-flex justify-content-center align-items-center d-none d-md-flex d-lg-flex p-0">
                            <div className='ms-0 ms-md-5 ms-lg-0'>
                                <h1 className=' text-danger font-big-1 d-none d-md-none d-lg-block text-start'>Up to 70% Off</h1>
                                <h1 className=' text-danger fs-1 d-none d-md-block d-lg-none text-start'>Up to 70% Off</h1>
                                <p className=''>Check out our Best Weekly Prices for Day Bakery</p>
                                <button onClick={onNavigateToShop} className='btn btn-outline-dark border-2 rounded-pill py-2 px-4 '>Shop All</button>
                            </div>
                            <img className='w-50 object-fit-cover mt-n5' src={potatoSnacksBanner} alt="" />
                        </div>
                        {/* SM */}
                        <div className="container-fluid border border-0 rounded-5 d-block d-md-none d-lg-none card border-0 m-0 p-0 py-5 py-lg-0">
                            <img src={potatoSnacksBanner} className="card-img me-n5 pt-5" alt="..."/>
                            <div className="card-img-overlay m-3">
                                <h1 className=' text-danger font-big-1 text-start'>Up to 70% Off</h1>
                                <p className=''>Check out our Best Weekly Prices for Potato Snacks</p>
                                <button onClick={onNavigateToShop} className='btn btn-outline-dark border-2 rounded-pill py-2 px-4 '>Shop All</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* LG */}
                        <div className="container-fluid container-md-fluid container-lg slider-home-3 d-flex justify-content-center align-items-center d-none d-md-flex d-lg-flex p-0">
                            <div className='ms-0 ms-md-5 ms-lg-0'>
                                <h1 className=' text-danger font-big-1 d-none d-md-none d-lg-block text-start'>Up to 70% Off</h1>
                                <h1 className=' text-danger fs-1 d-none d-md-block d-lg-none text-start'>Up to 70% Off</h1>
                                <p className=''>Check out our Best Weekly Prices for Day Bakery</p>
                                <button onClick={onNavigateToShop} className='btn btn-outline-dark border-2 rounded-pill py-2 px-4 '>Shop All</button>
                            </div>
                            <img className='w-50 object-fit-cover mt-n5' src={milkBanner} alt="" />
                        </div>

                        {/* SM */}
                        <div className="container-fluid border border-0 rounded-5 d-block d-md-none d-lg-none card border-0 m-0 p-0 py-5 py-lg-0">
                            <img src={milkBanner} className="card-img me-n5 pt-5" alt="..."/>
                            <div className="card-img-overlay m-3">
                                <h1 className=' text-danger font-big-1 text-start'>Up to 70% Off</h1>
                                <p className=''>Check out our Best Weekly Prices for Organic Milk</p>
                                <button onClick={onNavigateToShop} className='btn btn-outline-dark border-2 rounded-pill py-2 px-4 '>Shop All</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    
    
    </>
  )
}
