import React, { useEffect, useState } from 'react'
import { products } from '../../../data/products';
import { ProductSingleProduct } from '../ProductSingleProduct';
import { useSingleProductStore } from '../../../hooks';

export const Section3SingleProduct = ({product = 'Potato Snacks'}) => {
  const [newProducts, setNewProducts] = useState([]);
  const {singleProduct} = useSingleProductStore();

  useEffect(() => {
    const excludeProduct = products.filter(productF => productF.name != product);
    const tempProducts = excludeProduct.slice(0, 4);

    setNewProducts(tempProducts);

  }, [singleProduct])
  
  return (
    <>
    
        <div className="container-fluid container-lg my-5">
          <h2>Related Products</h2>
          <div className="row">
              {
                newProducts.map((product, index) =>(
                  <div key={index} className="col-6 col-lg-3">
                    <div className='p-0 p-lg-3'>
                      <ProductSingleProduct {...product}/>
                    </div>  
                  </div>
                ))
              }
          </div>
        </div>
    
    </>
  )
}
