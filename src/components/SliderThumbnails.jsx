import React, { useEffect } from 'react'

import { image1SliderHome1, image2SliderHome1, image3SliderHome1, image4SliderHome1, image5SliderHome1 } from '../assets';

export const SliderThumbnails = () => {

  useEffect(() => {
    const carouselLg = document.getElementById('carouselLg');
    const carouselMd = document.getElementById('carouselMd');
    const carouselSm = document.getElementById('carouselSm');
    let bootstrapCarouselLg;
    let bootstrapCarouselMd;
    let bootstrapCarouselSm;
    if(carouselLg){
      bootstrapCarouselLg = new window.bootstrap.Carousel(carouselLg, {
        interval: 3000,
        ride:'carousel'
      });
    }
    if(carouselMd){
      bootstrapCarouselMd = new window.bootstrap.Carousel(carouselMd, {
        interval: 3000,
        ride:'carousel'
      });
    }
    if(carouselSm){
      bootstrapCarouselSm = new window.bootstrap.Carousel(carouselSm, {
        interval: 3000,
        ride:'carousel'
      });
    }
    return () => {
      bootstrapCarouselLg.dispose();
      bootstrapCarouselMd.dispose();
      bootstrapCarouselSm.dispose();
    }
  }, [])


  return (
    <>
    
         {/* LG */}

         <div id="carouselLg" className="carousel carousel-dark bg-litle-gray pb-3 slide d-none d-md-none d-lg-block" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselLg" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselLg" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner pb-5">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row d-flex justify-content-center gap-5">
                    <div className="col-2">
                      <img className='img-thumbnail border-0 bg-transparent' src={image1SliderHome1} alt="" />
                    </div>
                    <div className="col-2">
                      <img className='img-thumbnail border-0 bg-transparent' src={image2SliderHome1} alt="" />
                    </div>
                    <div className="col-2">
                      <img className='img-thumbnail border-0 bg-transparent' src={image3SliderHome1} alt="" />
                    </div>
                    <div className="col-2">
                      <img className='img-thumbnail border-0 bg-transparent' src={image4SliderHome1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row d-flex justify-content-center gap-5">
                    <div className="col-2">
                      <img className='img-thumbnail border-0 bg-transparent' src={image5SliderHome1} alt="" />
                    </div>
                    <div className="col-2">
                      <img className='img-thumbnail border-0 bg-transparent' src={image1SliderHome1} alt="" />
                    </div>
                    <div className="col-2">
                      <img className='img-thumbnail border-0 bg-transparent' src={image2SliderHome1} alt="" />
                    </div>
                    <div className="col-2">
                      <img className='img-thumbnail border-0 bg-transparent' src={image3SliderHome1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
            
          </div>

          {/* MD */}
          <div id="carouselMd" className="carousel carousel-dark bg-litle-gray pb-3 d-none d-md-block d-lg-none slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselMd" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselMd" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner pb-5">
              
              <div className="carousel-item active">
                <div className="container">
                  <div className="row d-flex justify-content-center gap-5">
                    <div className="col-3">
                      <img className='img-thumbnail border-0 bg-transparent' src={image1SliderHome1} alt="" />
                    </div>
                    <div className="col-3">
                      <img className='img-thumbnail border-0 bg-transparent' src={image2SliderHome1} alt="" />
                    </div>
                    <div className="col-3">
                      <img className='img-thumbnail border-0 bg-transparent' src={image3SliderHome1} alt="" />
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row d-flex justify-content-center gap-5">
                    <div className="col-3">
                      <img className='img-thumbnail border-0 bg-transparent' src={image4SliderHome1} alt="" />
                    </div>
                    <div className="col-3">
                      <img className='img-thumbnail border-0 bg-transparent' src={image5SliderHome1} alt="" />
                    </div>
                    <div className="col-3">
                      <img className='img-thumbnail border-0 bg-transparent' src={image1SliderHome1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
            
          </div>

          {/* SM */}

          <div id="carouselSm" className="carousel carousel-dark bg-litle-gray pb-3 d-block d-md-none d-lg-none slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselSm" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselSm" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselSm" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselSm" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselSm" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner pb-5">
              
              <div className="carousel-item active">
                <div className="container">
                  <div className="row d-flex justify-content-center">
                    <div className="col-12 d-flex justify-content-center">
                      <img className='img-thumbnail border-0 bg-transparent' src={image1SliderHome1} alt="" />
                    </div> 
                  </div>
                </div>
              </div>


              <div className="carousel-item">
                <div className="container">
                  <div className="row d-flex justify-content-center">
                  <div className="col-12 d-flex justify-content-center">
                      <img className='img-thumbnail border-0 bg-transparent' src={image2SliderHome1} alt="" />
                    </div>
                  </div>
                </div>
              </div>


              <div className="carousel-item">
                <div className="container">
                  <div className="row d-flex justify-content-center">
                    <div className="col-12 d-flex justify-content-center">
                      <img className='img-thumbnail border-0 bg-transparent' src={image3SliderHome1} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="container">
                  <div className="row d-flex justify-content-center">
                    <div className="col-12 d-flex justify-content-center">
                      <img className='img-thumbnail border-0 bg-transparent' src={image4SliderHome1} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item ">
                <div className="container">
                  <div className="row d-flex justify-content-center">
                    <div className="col-12 d-flex justify-content-center">
                      <img className='img-thumbnail border-0 bg-transparent' src={image5SliderHome1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
            
          </div>
    
    </>
  )
}
