import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSingleProductStore } from '../../hooks';


export const ProductProducts = ({img = [], name, price, discountPrice, additionalInformation, reviews, categories}) => {

    const navigate = useNavigate();
    const { onSetSingleProduct} = useSingleProductStore();

    const onNavigateProduct = () => {
        
        onSetSingleProduct({img, name, price, discountPrice, additionalInformation, categories})
        localStorage.setItem('singleProduct', JSON.stringify({img, name, price, discountPrice, additionalInformation, reviews, categories}))
        
        navigate(`/single-product/${name}`);
    }

   return (
    <>
    
        <div className="container-fluid p-2">
            <div role='button' className="container-fluid p-0 product-shop-2  border border-0 rounded-4" onClick={onNavigateProduct}>
                <div role='button' className="container-fluid p-0 m-0 d-flex justify-content-center list-images-home-2 overflow-hidden border border-0 rounded-4">
                    <img className='w-100 h-100 object-fit-cover shadow' src={img[0]} alt="" />
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
        </div>

    </>
  )
}
