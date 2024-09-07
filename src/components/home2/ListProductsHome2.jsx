import React, { useEffect, useState } from 'react'
import { products } from '../../data/products';
import { ProductHome1 } from '../home1/ProductHome1';

export const ListProductsHome2 = () => {

    const [newProducts, setNewProducts] = useState([]);

    useEffect(() => {
      setNewProducts(products.slice(4, 8))
    }, [])


  return (
    <>
    
        <div className="container-fluid container-lg">
            <div className="row d-flex justify-content-center align-items-center">
                {newProducts.map(product => (
                    <div className='col-12 col-lg-3 my-2 p-0' key={product.name}>
                        <ProductHome1 {...product}/>
                    </div>
                ))}
            </div>
            
        </div>
    
    </>
  )
}
