import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSingleProductStore } from '../../hooks';

export const ProductSingleProduct = ({img, name, price, discountPrice, additionalInformation, reviews, categories}) => {

    const navigate = useNavigate();
    const { onSetSingleProduct} = useSingleProductStore();

    const onNavigateProduct = () => {
        
        onSetSingleProduct({img, name, price, discountPrice, additionalInformation, reviews, categories})
        localStorage.setItem('singleProduct', JSON.stringify({img, name, price, discountPrice, additionalInformation, reviews, categories}))
        
        navigate(`/single-product/${name}`);
        window.scrollTo({top:0, behavior: 'smooth'});
    }

  return (
    <>
    
        <div role='button' className="container-fluid product-shop-2 p-0 border border-0 rounded-4" onClick={onNavigateProduct}>
            {/* LG */}
            <div className="d-block d-md-none d-lg-block container-fluid p-0 m-0 d-flex justify-content-center overflow-hidden border border-0 rounded-4" style={{height:'16rem'}}>
                <img className='w-100 h-100 object-fit-cover shadow' src={img[0]} alt="" />
            </div>
            {/* MD */}
            <div className="d-none d-md-block d-lg-none container-fluid p-0 m-0 d-flex justify-content-center overflow-hidden border border-0 rounded-4 shadow bg-white" style={{height:'23rem'}}>
                <div className='m-0 p-0 w-100 d-flex justify-content-center'>
                    <img className='w-75 h-75 object-fit-cover' src={img[0]} alt="" />
                </div>
            </div>
            <div className="container text-center py-3">
                <h4 className=''>{name}</h4>
                <div className="d-flex justify-content-center gap-1 ">
                    <p className={`text-danger ${discountPrice === '' ? '' : 'text-decoration-underline'}`}>{price}</p>
                    <p className='text-secondary text-decoration-line-through'>{discountPrice}</p> 
                </div>
                <button className='btn btn-outline-litle-green text-dark border-2 border-dark rounded-pill link-light  button-outline-litle-green-hover font-small-1'>Add to cart</button>
            </div>
        </div>
    
    </>
  )
}
