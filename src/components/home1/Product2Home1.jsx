import React from 'react'
import { useSingleProductStore } from '../../hooks';
import { useNavigate } from 'react-router-dom';

export const Product2Home1 = ({img = [], name, price, discountPrice = '', additionalInformation, reviews, categories}) => {

    const {onSetSingleProduct} = useSingleProductStore();
    const navigate = useNavigate();


    const onNavigate = () => {
        onSetSingleProduct({img, name, price, discountPrice, additionalInformation, reviews, categories});
        localStorage.setItem('singleProduct', JSON.stringify({img, name, price, discountPrice, additionalInformation, reviews, categories}))
        navigate(`/single-product/${name}`);
    }

  return (
    <>
    
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-6">
                    <img className='w-100 border rounded-4' src={img[0]} alt="" />
                </div>
                <div className="col-6">
                    <h4 role='button' onClick={onNavigate} className=''>{name}</h4>
                    <p>Suspendisse rhoncus erat..</p>
                    <div className="d-flex justify-content-start gap-1 fw-bold text-dark">
                        <p className='text-decoration-underline'>{price}</p>
                        <p className='text-decoration-line-through'>{discountPrice}</p> 
                    </div>
                    <button className='btn btn-litle-green text-white border rounded-pill'>Add to cart</button>
                </div>
            </div>
        </div>

    </>
  )
}
