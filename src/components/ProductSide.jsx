import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSingleProductStore } from '../hooks';


export const ProductSide = ({img = [], name, price, discountPrice = '', additionalInformation, reviews, categories}) => {

    const navigate = useNavigate();
    const {onSetSingleProduct} = useSingleProductStore();


    // useEffect(() => {
    //     const cards = document.querySelectorAll('.card');
    //     cards.forEach(card => {
    //         card.addEventListener('mouseover', () => {
    //             const buttons = card.querySelector('.position-absolute');
    //             if(buttons){
    //                 buttons.classList.add('animate__fadeInUp')
    //                 buttons.classList.remove('d-none'); 

    //             }
    //         });
    
    //         card.addEventListener('mouseleave', () => {
    //             const buttons = card.querySelector('.position-absolute')
    //             if(buttons){
    //                 buttons.classList.add('d-none')
                    
                    

    //             }
    //         });
    //     })

    //     return () => {
    //         cards.forEach(card => {
    //             card.removeEventListener('mouseover', () => {});
    //             card.removeEventListener('mouseleave', () => {});
    //         })
    //     }
    // }, []);

    const onNavigate = () => {
        onSetSingleProduct({img, name, price, discountPrice, additionalInformation, reviews, categories});
        localStorage.setItem('singleProduct', JSON.stringify({img, name, price, discountPrice, additionalInformation, reviews, categories}))
        navigate(`/single-product/${name}`);
    }
    

  return (
    <>
        <div className="container-fluid p-3">
            <div className="container-fluid card border rounded-5 product-side-hover w-100">
                <div className="container-fluid position-relative p-0 m-0 d-flex justify-content-center" style={{height: '25rem'}}>
                    <img className='w-100 h-100 object-fit-cover border-0 rounded-5' src={img[0]} alt="" />
                    <div className="position-absolute d-none d-flex justify-content-center col-12 bottom-0 animate__animated animate__faster mb-4">
                        <div className="row col-12 d-flex justify-content-center">
                            <div className="col-3 m-0 p-0">
                                <div className="col-12 d-flex justify-content-end">
                                    <button className='btn btn-litle-green border border-0 d-flex justify-content-center align-items-center position-relative rounded-circle shadow button-litle-green-hover p-4'>
                                        <i className="text-white bi bi-cart-fill position-absolute fs-5"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col-3 m-0 p-0">
                                <div className="col-12 d-flex justify-content-center">
                                    <button className='btn btn-litle-green border border-0 d-flex justify-content-center align-items-center position-relative rounded-circle shadow button-litle-green-hover p-4'>
                                        <i className="text-white bi bi-eye-fill position-absolute fs-5"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col-3 m-0 p-0">
                                <div className="col-12 d-flex justify-content-start">
                                    <button onClick={onNavigate} className='btn btn-litle-green border border-0 d-flex justify-content-center align-items-center position-relative rounded-circle shadow button-litle-green-hover p-4'>
                                        <i className="text-white bi bi-link-45deg position-absolute fs-5"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-center py-3 ">
                    <h4 className=''>{name}</h4>
                    <div className="d-flex justify-content-center gap-1 fw-bold text-dark">
                        <p className='text-decoration-underline'>{price}</p>
                        <p className='text-decoration-line-through'>{discountPrice}</p> 
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
