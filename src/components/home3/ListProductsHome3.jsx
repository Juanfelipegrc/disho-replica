import React, { useEffect, useState } from 'react'
import { products } from '../../data/products';
import { Product2Home1 } from '../../components';

export const ListProductsHome3 = () => {

    const [newProducts, setNewProducts] = useState([]);

    useEffect(() => {
      setNewProducts(products.slice(4, 12))
    }, [])


  return (
    <>
    
        <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center">
                {newProducts.map(product => (
                    <div className='col-12 col-lg-6 my-3 p-0' key={product.name}>
                        <Product2Home1 {...product}/>
                    </div>
                ))}
            </div>
            
        </div>
    
    </>
  )
}
