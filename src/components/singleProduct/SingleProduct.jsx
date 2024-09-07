import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useCategoryStore, useSingleProductStore } from '../../hooks';

export const SingleProduct = () => {

    const {img = [], name, price, additionalInformation = {}, discountPrice = '', categories = []} = useSingleProductStore();

    const [activeImage, setActiveImage] = useState(img[0]);
    const {onSetCategory} = useCategoryStore();

    

    useEffect(() => {
        setActiveImage(img[0])
    }, [img])

    const onChangeActiveImage = (position) => {
        setActiveImage(img[position])
        const carouselElement = document.getElementById('carouselExampleIndicators');
        const bootstrapCarousel = new window.bootstrap.Carousel(carouselElement);
        bootstrapCarousel.to(position)
    }

    const onSetActiveCategory = (category) => {
        onSetCategory(category)
    }

 
    
   

    const {weight, dimensions, packWeight, flavor, size, brand, color} = additionalInformation;
    



  return (
    <>
    
        <div className="container-fluid">
            <div className="row">

                <div className="col-12 col-md-5 col-lg-5">
                    <div className="container-fluid">
                        <div id="carouselExampleIndicators" className="carousel carousel-dark slide border border-0 rounded-5 ">
                            
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src={img[0]} className="d-block w-100 border border-0 rounded-5 " alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src={img[1]} className="d-block w-100 border border-0 rounded-5 " alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src={img[2]} className="d-block w-100 border border-0 rounded-5 " alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src={img[3]} className="d-block w-100 border border-0 rounded-5 " alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src={img[4]} className="d-block w-100 border border-0 rounded-5 " alt="..."/>
                                </div>
                            </div>
                            <div className="row mt-2">
                                        <div className={`col-3 p-2 overflow-hidden ${img[0]? '' : 'd-none'}`}>
                                            <div onClick={() => onChangeActiveImage(0)} className='p-0 overflow-hidden border border-0 rounded-4' style={{height:'7rem'}}>
                                                <img className={`w-100 h-100 object-fit-cover img-single-product ${activeImage === img[0]? 'opacity-100' : 'opacity-50'}`} src={img[0]} alt="" />
                                            </div>
                                        </div>
                                        <div className={`col-3 p-2 overflow-hidden ${img[1]? '' : 'd-none'}`}>
                                            <div onClick={() => onChangeActiveImage(1)} className='p-0 overflow-hidden border border-0 rounded-4' style={{height:'7rem'}}>
                                                <img className={`w-100 h-100 object-fit-cover img-single-product ${activeImage === img[1]? 'opacity-100' : 'opacity-50'}`} src={img[1]} alt="" />
                                            </div>
                                        </div>
                                        <div onClick={() => onChangeActiveImage(2)} className={`col-3 p-2 overflow-hidden ${img[2]? '' : 'd-none'}`}>
                                            <div className='p-0 overflow-hidden border border-0 rounded-4' style={{height:'7rem'}}>
                                                <img className={`w-100 h-100 object-fit-cover img-single-product ${activeImage === img[2]? 'opacity-100' : 'opacity-50'}`} src={img[2]} alt="" />
                                            </div>
                                        </div>
                                        <div className={`col-3 p-2 overflow-hidden ${img[3]? '' : 'd-none'}`}>
                                            <div onClick={() => onChangeActiveImage(3)} className='p-0 overflow-hidden border border-0 rounded-4' style={{height:'7rem'}}>
                                                <img className={`w-100 h-100 object-fit-cover img-single-product ${activeImage === img[3]? 'opacity-100' : 'opacity-50'}`} src={img[3]} alt="" />
                                            </div>
                                        </div>
                                        <div className={`col-3 p-2 overflow-hidden ${img[4]? '' : 'd-none'}`}>
                                            <div onClick={() => onChangeActiveImage(4)} className='p-0 overflow-hidden border border-0 rounded-4' style={{height:'7rem'}}>
                                                <img className={`w-100 h-100 object-fit-cover img-single-product ${activeImage === img[4]? 'opacity-100' : 'opacity-50'}`} src={img[4]} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-7 col-lg-7">
                        <h1>{name}</h1>
                        <div className="d-flex gap-2 align-items-center">
                            <h5 className='text-secondary text-decoration-line-through fw-sans'>{discountPrice}</h5>
                            <h5 className='text-decoration-underline'>{price}</h5>
                        </div>
                        <button className='btn btn-litle-green border border-0 rounded-pill text-white py-3 px-5 button-litle-green-hover'><i className="bi bi-cart-fill"></i> Add to cart</button>
                        <p className='fw-sans text-dark-blue mt-3'><span>SKU</span> 1234567</p>

                        <p className='fw-sans text-dark-blue'><span className='me-2'>{categories.length > 1? 'Categories' : 'Category'}</span> 
                        {
                            categories.map((category, index) => (
                                <Link key={index} onClick={() => onSetActiveCategory(category)} to={`/categories/${category.toLowerCase()}`} className='text-dark text-decoration-none fw-sans link-litle-green'>{category}{index + 1 === categories.length? '' : ', '}</Link>
                            ))
                        }
                        </p>

                        <p className='fw-sans text-dark-blue '><span>Tags</span> &nbsp;
                            <Link className='text-dark text-decoration-none fw-sans link-litle-green'>berries, </Link>
                            <Link className='text-dark text-decoration-none fw-sans link-litle-green'>best-sellers, </Link> 
                            <Link className='text-dark text-decoration-none fw-sans link-litle-green'>fresh, </Link>
                            <Link className='text-dark text-decoration-none fw-sans link-litle-green'>fruit, </Link>
                            <Link className='text-dark text-decoration-none fw-sans link-litle-green'>seasonal</Link>
                        </p>
                        <p className='text-dark-blue'>200 in stock</p>
                        <h3>Additional Information</h3>
                        <div className={`container-fluid border ${additionalInformation.length === 0? 'd-none' : ''}`}>
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
                        <p className='fw-sans'>Suspendisse rhoncus erat gravida finibus hendrerit. Donec elit risus, ultricies eget porta ac, tincidunt blandit risus. Aenean non eros enim. Quisque tempus turpis diam, sed luctus ex aliquam vitae. Nunc dictum, neque ut ornare vestibulum, arcu justo tempus mauris, ullamcorper volutpat est velit eu nulla. Curabitur eget est pretium quam ornare venenatis ac ac nisi. Fusce quam quam, semper quis sagittis in, mattis vel dui. Nam quis sagittis lacus</p>
                    </div>
       
            </div>
        </div>
    
    </>
  )
}
