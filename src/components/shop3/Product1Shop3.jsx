import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSingleProductStore } from '../../hooks';

export const Product1Shop3 = ({img = [], name, price, discountPrice = '', additionalInformation, reviews, categories}) => {

    const navigate = useNavigate();
    const {onSetSingleProduct} = useSingleProductStore();

    const onNavigateToProduct = () => {
        onSetSingleProduct({img, name, price, discountPrice, additionalInformation, reviews, categories});
        localStorage.setItem('singleProduct', JSON.stringify({img, name, price, discountPrice, additionalInformation, reviews, categories}))
        navigate(`/single-product/${name}`);
    }

  return (
    <>
    
    
            <div className="container-fluid p-0">
                {/* LG */}
                <div className="row d-none d-md-flex d-lg-flex">
                    <div role='button' onClick={onNavigateToProduct} className="col-md-5 col-lg-3 d-flex justify-content-center align-items-center overflow-hidden border border-0 rounded-4 shadow bg-white" style={{height: '18rem'}}>
                        <img className='w-75 h-75 object-fit-cover border border-0 rounded-4' src={img[0]} alt="" />
                    </div>
                    <div className="col-7 p-4 pe-0">
                        <h4 role='button' onClick={onNavigateToProduct} className=''>{name}</h4>
                        <p className='fw-sans'>Suspendisse rhoncus erat gravida finibus hendrerit. Donec elit risus, ultricies eget porta ac, tincidunt blandit risus. Aenean non eros enim. Quisque tempus turpis diam,...</p>
                        <div className="d-flex justify-content-start gap-1  text-dark">
                            <p className='text-decoration-underline'>{price}</p>
                            <p className='text-decoration-line-through'>{discountPrice}</p> 
                        </div>
                        <button className='btn btn-litle-green text-white border rounded-pill '>Add to cart</button>
                    </div>
                </div>
                {/* SM */}
                <div className="row d-flex d-md-none d-lg-none">
                    <div className='col-6 p-4'>
                        <div role='button' onClick={onNavigateToProduct} className=" d-flex justify-content-center align-items-center overflow-hidden border border-0 rounded-4 shadow bg-white" style={{height: '12rem'}}>
                            <img className='w-100 h-100 object-fit-cover border border-0 rounded-4' src={img[0]} alt="" />
                        </div>
                    </div>
                    <div className="col-6 p-4 pe-0">
                        <h4 role='button' onClick={onNavigateToProduct} className=''>{name}</h4>
                        <p className='fw-sans'>Suspendisse rhoncus erat gravida finibus hendrerit. Donec elit risus, ultricies eget porta ac, tincidunt blandit risus. Aenean non eros enim. Quisque tempus turpis diam,...</p>
                        <div className="d-flex justify-content-start gap-1  text-dark">
                            <p className='text-decoration-underline'>{price}</p>
                            <p className='text-decoration-line-through'>{discountPrice}</p> 
                        </div>
                        <button className='btn btn-litle-green text-white border rounded-pill '>Add to cart</button>
                    </div>
                </div>
            </div>
        
    
    </>
  )
}
