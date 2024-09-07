import React, { useEffect } from 'react'
import { banner1SliderHome2, banner2SliderHome2, banner3SliderHome2 } from '../assets'

export const SliderWatermelonsHome2 = ({arrows = 'yes'}) => {


    useEffect(() => {
        const carousel = document.getElementById('carouselExampleInterval');
        let bootstrapCarousel;
        if(carousel){
            bootstrapCarousel = new window.bootstrap.Carousel(carousel, {
                interval: 3000,
                ride:'carousel'
            })
        }
        return () => {
          bootstrapCarousel.dispose();
        }
      }, [])

  return (
    <>
    
    <div className="container-fluid container-lg pt-5">
            <div id="carouselExampleInterval" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <div className="container-fluid d-flex flex-column justify-content-center" >
                    <img src={banner1SliderHome2} className="d-block w-100 px-5"/>
                    <h5 className='text-center d-none d-md-block d-lg-block'>Watermelon woman eat yellow funny tasty food</h5>
                    <h6 className='text-center d-block d-md-none d-lg-none'>Watermelon woman eat yellow funny <br/>  tasty food</h6>
                </div>
                </div>
                <div className="carousel-item">
                <div className="container-fluid d-flex flex-column justify-content-center" >
                    <img src={banner2SliderHome2} className="d-block w-100 px-5"/>
                    <h5 className='text-center d-none d-md-block d-lg-block'>Watermelon</h5>
                    <h6 className='text-center d-block d-md-none d-lg-none'>Watermelon</h6>
                </div>
                </div>
                <div className="carousel-item">
                <div className="container-fluid d-flex flex-column justify-content-center" >
                    <img src={banner3SliderHome2} className="d-block w-100 px-5"/>
                    <h5 className='text-center d-none d-md-block d-lg-block'>Watermelon woman eat yellow funny tasty food</h5>
                    <h6 className='text-center d-block d-md-none d-lg-none'>Watermelon woman eat yellow funny <br/>  tasty food</h6>
                </div>
                </div>
            </div>
            <button className={`carousel-control-prev ${arrows === 'no'? 'd-none' : 'd-block'}`} style={{width:'3rem'}} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className={`carousel-control-next ${arrows === 'no'? 'd-none' : 'd-block'}`} style={{width:'3rem'}} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next" >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

            </div>
        </div>
    
    </>
  )
}
