import React, { useEffect, useState } from 'react'
import { products } from '../../data/products';
import { ProductProducts } from './ProductProducts';

export const ListProducts1 = () => {

  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    const tempProducts = products.slice(0, 9);

    setNewProducts(tempProducts);
  }, []);
  


  return (
    <>
    
        <div className="container-fluid">
          <div className="row d-flex">
            {
              newProducts.map((product, index) => (
                <div key={index} className="col-6 col-md-4 col-lg-3 p-0">
                  <ProductProducts product={product} {...product}/>
                </div>
              ))
            }
          </div>
        </div>

    </>
  )
}
