import React, { useEffect, useState } from 'react'
import { products } from '../../data/products';
import { ProductHome3 } from './ProductHome3';

export const List2ProductsHome3 = () => {

    const [newProducts, setNewProducts] = useState([]);

    useEffect(() => {
      setNewProducts(products.slice(4, 12))
    }, [])


  return (
    <>
    
        <div className="container-fluid container-md-fluid container-lg">
            <div className="row d-flex justify-content-center align-items-center">
                {newProducts.map(product => (
                    <div className='col-12 col-lg-3 my-2 pe-2' key={product.name}>
                        <ProductHome3 {...product}/>
                    </div>
                ))}
            </div>
            
        </div>
    
    </>
  )
}
