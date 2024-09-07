import React, { useEffect } from 'react'
import { PopupDiscount, Section1SingleProduct, Section2SingleProduct, Section3SingleProduct, Section4SingleProduct } from '../../components'
import { Link, useNavigate } from 'react-router-dom'
import {useCategoryStore, useSingleProductStore} from '../../hooks'
import { products } from '../../data/products'

export const SingleProductPage = () => {

  const {singleProduct, onSetSingleProduct} = useSingleProductStore();
  const {onSetCategory} = useCategoryStore();
  const navigate = useNavigate();

  useEffect(() => {

    const validation = Object.keys(singleProduct).every(key => {
      const value = singleProduct[key];
      return value.length === 0;
    })

    if(validation){
        const productF = products.find(product => product.name === 'Potato Snacks');
        onSetSingleProduct(productF);
        navigate(`/single-product/${productF.name}`)
    }
    const singleProductLC = JSON.parse(localStorage.getItem('singleProduct')) || '';
    if(singleProductLC != ''){
      onSetSingleProduct(singleProductLC);
    }
    else{
        const productF = products.find(product => product.name === 'Potato Snacks');
        onSetSingleProduct(productF);
        navigate(`/single-product/${productF.name}`)
    }
  }, [])

  const onNavigateCategory = (categoryProducts) => {
    onSetCategory(categoryProducts);
    
    navigate(`/categories/${categoryProducts.toLowerCase()}`);
}

  
  

  return (
    <>
    
      <div className="container-fluid p-0 m-0 bg-litle-gray animate__animated animate__fadeIn">
        {/* SECTION 1 */}
          <div className="container-fluid d-flex align-items-center p-0 py-3 m-0 bg-middle-gray">
            <div className="container">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item"><Link className='text-dark text-decoration-none fw-sans' to='/'>Home</Link></li>
                  <li className="breadcrumb-item"><Link className='text-dark text-decoration-none fw-sans' onClick={() => onNavigateCategory(singleProduct.categories[singleProduct.categories.length - 1])}>{singleProduct.categories[singleProduct.categories.length - 1]}</Link></li>
                  <li className="breadcrumb-item active fw-sans" aria-current="page">{singleProduct.name}</li>
                </ol>
              </nav>
            </div>
          </div>
          <Section1SingleProduct/>

        {/* SECTION 2 */}
          <Section2SingleProduct/>
        {/* SECTION 3 */}
          <Section3SingleProduct product={singleProduct.name}/>
        {/* SECTION 4 */}
          <Section4SingleProduct/>

          <PopupDiscount/>
      </div>
    
    </>
  )
}
