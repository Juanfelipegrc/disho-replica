import React, { useEffect, useState } from 'react'
import {ProductSide} from '../components'
import { products } from '../data/products'

export const ListProductsSide = () => {

    const [newProducts, setNewProducts] = useState([])

    useEffect(() => {
      const filterProducts = products.filter(product => {
        return product.name === 'Red Onion' || product.name === 'Canned Pepper'
      });

      setNewProducts(filterProducts);

    }, []);


    
    

  return (
    <>

        <div className="container-fluid p-0 m-0 d-flex gap-3 flex-column align-items-center">
            {
                newProducts.map((product, index) => (
                    <div key={index} className='col-12 col-md-12 col-lg-10 d-flex justify-content-center align-items-center'>
                      <ProductSide {...product}/>
                    </div>
                ))
            }
        </div>

    </>
  )
}
