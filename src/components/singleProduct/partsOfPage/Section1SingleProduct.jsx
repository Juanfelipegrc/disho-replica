import React, { useEffect, useState } from 'react'
import { SingleProduct } from '../SingleProduct'
import { products } from '../../../data/products';
import { useSingleProductStore } from '../../../hooks';

export const Section1SingleProduct = () => {

    const {singleProduct} = useSingleProductStore();

    

  return (
    <>
    
        <div className="container-fluid container-lg my-5">
            <SingleProduct {...singleProduct}/>
        </div>
    
    </>
  )
}
