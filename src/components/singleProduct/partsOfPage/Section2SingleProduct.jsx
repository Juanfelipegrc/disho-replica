import React, { useEffect, useRef, useState } from 'react'
import { useSingleProductStore } from '../../../hooks';

export const Section2SingleProduct = () => {
    const [activeElement, setActiveElement] = useState('description');
    // const [ratingSelected, setRatingSelected] = useState('');
    const {additionalInformation = {}, reviews = [], name} = useSingleProductStore();
    const {weight, dimensions, packWeight, flavor, size, brand, color} = additionalInformation;
    

    const onSetActiveElement = (element) => {
        setActiveElement(element)
    }

    useEffect(() => {
      if(Object.keys(additionalInformation).length === 0){
        setActiveElement('description')
      }
    }, [additionalInformation])
    

    const onChangeRating = ({target}) => {
        const {value} = target;
      
        const stars = document.querySelectorAll('.bi-star, .bi-star-fill');
        stars.forEach((star, index) => {
            if(index < value){
                star.classList.remove('bi-star');
                star.classList.add('bi-star-fill');
            } else{
                star.classList.remove('bi-star-fill');
                star.classList.add('bi-star');
            }
        })
    }
    
    

  return (
    <>
    
        <div className="container-fluid container-lg bg-litle-gray">
        <div className="card text-center border border-0 rounded-4 bg-litle-gray">
            <div className="card-header border border-0 bg-litle-gray">
                <ul className="nav nav-tabs card-header-tabs d-flex flex-column flex-md-row flex-lg-row align-items-start ms-3">
                <li className="nav-item ">
                    <a role='button' className={`nav-link text-start text-md-center text-lg-center d-inline-block text-dark-blue border border-0 rounded-top ${activeElement === 'description'? 'active' : ''}`} onClick={() => onSetActiveElement('description')}>Description</a>
                </li>
                <li className={`nav-item ${Object.keys(additionalInformation).length === 0? 'd-none':''}`}>
                    <a role='button' className={`nav-link text-start text-md-center text-lg-center d-inline-block text-dark-blue border border-0 rounded-top ${activeElement === 'additional-information'? 'active' : ''}`}  onClick={() => onSetActiveElement('additional-information')}>Additional Information</a>
                </li>
                <li className="nav-item">
                    <a role='button' className={`nav-link text-start text-md-center text-lg-center d-inline-block text-dark-blue border border-0 rounded-top ${activeElement === 'reviews'? 'active' : ''}`}  onClick={() => onSetActiveElement('reviews')}>Reviews ({reviews.length}) </a>
                </li>
                </ul>
            </div>
            <div className={`card-body text-start text-dark-blue bg-white  border border-0 rounded-4 ${activeElement === 'description'? '' : 'd-none'}`}>
                <div className='p-3'>
                    <h1 className='mb-4'>Description</h1>
                    <p className='fw-sans'>Suspendisse rhoncus erat gravida finibus hendrerit. Donec elit risus, ultricies eget porta ac, tincidunt blandit risus. Aenean non eros enim. Quisque tempus turpis diam, sed luctus ex aliquam vitae. Nunc dictum, neque ut ornare vestibulum, arcu justo tempus mauris, ullamcorper volutpat est velit eu nulla. Curabitur eget est pretium quam

                    Aenean nec eleifend lorem. Vestibulum eget felis aliquet, auctor nisl non, tincidunt nisl. Mauris et eros sapien. In ornare sapien eu nunc aliquam iaculis. Ut risus sem, accumsan eu aliquet non, tempor eget nisl. Fusce condimentum in diam non ultrices. Nulla urna ex, varius ut odio quis, condimentum ullamcorper nibh. Vivamus dapibus ligula dictum efficitur pulvinar. Curabitur a vehicula massa, quis commodo libero.

                    Praesent ut sapien vitae est porttitor lobortis. Ut ultrices arcu ut lorem lacinia vestibulum. Donec convallis lectus risus. Ut porta commodo lorem vel ultricies. Nam at blandit mauris. Donec tempus, velit at blandit commodo, mi tellus vestibulum lacus, sed semper risus arcu porta tortor. Cras consequat, nibh in maximus lacinia, tellus ipsum placerat turpis, id lobortis orci lacus eu erat. Cras facilisis venenatis orci vitae efficitur. Nulla pulvinar pretium cursus. Etiam elementum, nulla nec eleifend fringilla, ligula leo eleifend eros, et aliquam orci nunc eleifend mauris. Phasellus ultricies sapien at risus sagittis, ut euismod leo scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi nulla odio, facilisis sit amet lobortis at, molestie sit amet velit.</p>
                </div>
            </div>

            {/* ADDITIONAL INFORMATION */}

            <div className={`card-body text-start text-dark-blue bg-white  border border-0 rounded-4 ${Object.keys(additionalInformation).length === 0? 'd-none':''}  ${activeElement === 'additional-information'? '' : 'd-none'}`}>
                <div className="p-3">
                    <div className={`container-fluid bg-litle-gray border ${additionalInformation.length === 0? 'd-none' : ''}`}>
                        <div className={`row d-flex align-items-center py-2 border-bottom ${weight? 'd-block' : 'd-none'}`}>
                            <div className="col-3 border-end p-0">
                                <p className='text-dark-blue m-0 text-center'>Weigth</p>
                            </div>
                            <div className="col-9">
                                <p className='fw-sans m-0'>{weight}</p>
                            </div>
                        </div>
                        <div className={`row d-flex align-items-center py-2 border-bottom ${dimensions? 'd-block' : 'd-none'}`}>
                            <div className="col-3 border-end p-0">
                                <p className='text-dark-blue m-0 text-center'>Dimensions</p>
                            </div>
                            <div className="col-9">
                                <p className='fw-sans m-0'>{dimensions}</p>
                            </div>
                        </div>
                        <div className={`row d-flex align-items-center py-2 border-bottom ${packWeight? 'd-block' : 'd-none'}`}>
                            <div className="col-3 border-end p-0">
                                <p className='text-dark-blue m-0 text-center'>Pack weigth</p>
                            </div>
                            <div className="col-9">
                                <p className='fw-sans m-0'>{packWeight}</p>
                            </div>
                        </div>
                        <div className={`row d-flex align-items-center py-2 border-bottom ${color? 'd-block' : 'd-none'}`}>
                            <div className="col-3 border-end p-0">
                                <p className='text-dark-blue m-0 text-center'>Color</p>
                            </div>
                            <div className="col-9">
                                <p className='fw-sans m-0'>{color}</p>
                            </div>
                        </div>
                        <div className={`row d-flex align-items-center py-2 border-bottom ${dimensions? 'd-block' : 'd-none'}`}>
                            <div className="col-3 border-end p-0">
                                <p className='text-dark-blue m-0 text-center'>Dimensions</p>
                            </div>
                            <div className="col-9">
                                <p className='fw-sans m-0'>{dimensions}</p>
                            </div>
                        </div>
                        <div className={`row d-flex align-items-center py-2 border-bottom ${flavor? 'd-block' : 'd-none'}`}>
                            <div className="col-3 border-end p-0">
                                <p className='text-dark-blue m-0 text-center'>Flavor</p>
                            </div>
                            <div className="col-9">
                                <p className='fw-sans m-0'>{flavor}</p>
                            </div>
                        </div>
                        <div className={`row d-flex align-items-center py-2 border-bottom ${size? 'd-block' : 'd-none'}`}>
                            <div className="col-3 border-end p-0">
                                <p className='text-dark-blue m-0 text-center'>Size</p>
                            </div>
                            <div className="col-9">
                                <p className='fw-sans m-0'>{size}</p>
                            </div>
                        </div>
                        <div className={`row d-flex align-items-center py-2 ${brand? 'd-block' : 'd-none'}`}>
                            <div className="col-3 border-end p-0">
                                <p className='text-dark-blue m-0 text-center'>Brand</p>
                            </div>
                            <div className="col-9">
                                <p className='fw-sans m-0'>{brand}</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>

            {/* REVIEWS */}
            <div className={`card-body text-start text-dark-blue bg-white  border border-0 rounded-4 ${activeElement === 'reviews'? '' : 'd-none'}`}>
                <div className='p-3'>
                    <h1 className={`font-big-2 ${reviews.length === 0? '' : 'd-none'}`}>Reviews</h1>
                    <h1 className={`font-big-2 ${reviews.length === 0? 'd-none' : ''}`}>{reviews.length} {reviews.length === 1? 'review' : 'reviews'} for {name}</h1>
                    {
                        reviews.map((review, index) => (
                            <div key={index} className="row ms-4 my-4">
                                <div className="col-3 col-md-1 col-lg-1 d-flex flex-column align-items-center">
                                    <img className='w-50 border border-3 rounded-circle' src={review.profilePhoto} alt="" />
                                </div>
                                <div className="col-8 col-md-11 col-lg-11 border rounded-2 p-3">
                                    <p className='font-small-1 text-secondary'>{review.username} <span className='fw-sans'> - {review.date}</span></p>
                                    <p className='fw-sans mt-3'>{review.body}</p>
                                </div>
                            </div>
                        ))
                    }
                     <p className={`fw-sans m-0 mb-3 ${reviews.length === 0? '' : 'd-none'}`}>There are no reviews yet.</p>
                    <p className='fw-sans m-0'>{reviews.length === 0? 'Be the first to review “Fresh Lime”' : 'Add a review'}</p>
                    <p className='fw-sans m-0 mb-3'>Your email address will not be published. Required fields are marked *</p>
                    <form>
                    <div className="mb-3">
                        <label className="fw-sans form-label d-block">Your Rating*</label>
                            <div>
                                <input className="ms-3 form-check-input" type="radio" name="radioNoLabel" value="1" aria-label="..." onChange={onChangeRating} data-index='1'/>
                                <i className="ms-3 bi bi-star"></i>
                            </div>
                            <div>
                                <input className="ms-3 form-check-input" type="radio" name="radioNoLabel" value="2" aria-label="..." onChange={onChangeRating} data-index='2'/>
                                <i className="ms-3 bi bi-star"></i>
                            </div>
                            <div>
                                <input className="ms-3 form-check-input" type="radio" name="radioNoLabel" value="3" aria-label="..." onChange={onChangeRating} data-index='3'/>
                                <i className="ms-3 bi bi-star"></i>
                            </div>
                            <div>
                                <input className="ms-3 form-check-input" type="radio" name="radioNoLabel" value="4" aria-label="..." onChange={onChangeRating} data-index='4'/>
                                <i className="ms-3 bi bi-star"></i>
                            </div>
                            <div>
                                <input className="ms-3 form-check-input" type="radio" name="radioNoLabel" value="5" aria-label="..." onChange={onChangeRating} data-index='5'/>
                                <i className="ms-3 bi bi-star"></i>
                            </div>
                        
                    </div>
                    <div className="mb-3">
                        <label className="fw-sans form-label">Your Review*</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="fw-sans form-label">Name*</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="fw-sans form-label">Email*</label>
                        <input type="email" className="form-control"/>
                    </div>
                    
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="fw-sans form-check-label text-secondary">Save my name, email, and website in this browser for the next time I comment.</label>
                    </div>
                    <button type="submit" className="btn btn-middle-gray">Submit</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    
    </>
  )
}
