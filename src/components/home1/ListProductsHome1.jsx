import React, { useEffect, useState } from 'react'
import { ProductHome1 } from './ProductHome1'
import { products } from '../../data/products'

export const ListProductsHome1 = () => {

    const [newProducts, setNewProducts] = useState([]);

    useEffect(() => {
      setNewProducts(products.slice(0, 9))
    }, [])


    

  return (
    <>
    
        <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
            {newProducts.map(product => (
                <div className='col-12 col-lg-4 my-2 p-3 p-md-3 p-lg-0' key={product.name}>
                    <ProductHome1 {...product}/>
                </div>
            ))}
        </div>
        
        </div>
    
    </>
  )
}
