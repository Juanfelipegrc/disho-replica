import React, { useEffect, useState } from 'react'
import { products } from '../data/products'
import { Product2Home1 } from './home1/Product2Home1';

export const ListProductsSFL = () => {
    const [newProducts, setNewProducts] = useState([])

    useEffect(() => {
        const tempProducts = products.slice(7, 19);

        setNewProducts(tempProducts);

    }, []);

    

    
    
  return (
    <>
    
        <div className="container-fluid p-0 m-0">
            <div className="row flex-column flex-lg-row d-flex justify-content-center ">
                
                {
                    newProducts.map(product => (
                        <div key={product.name} className="col-12 col-lg-4 my-3">
                            {
                                product === newProducts[0]?
                                (
                                    <div className='d-none d-lg-block'>
                                        <h2>Sale Products</h2>
                                        <hr className="border-3 border-litle-green opacity-100 col-4"></hr>
                                    </div>

                                )
                                :<></>
                            }
                            {
                                product === newProducts[1]?
                                (
                                    <div className='d-none d-lg-block'>
                                        <h2>Featured Products</h2>
                                        <hr className="border-3 border-warning opacity-100 col-4"></hr>
                                    </div>
                                )
                                :<></>
                            }
                            {
                                product === newProducts[2]?
                                (
                                    <div  className='d-none d-lg-block'>
                                        <h2>Latest Arrivals</h2>
                                        <hr className="border-3 border-danger opacity-100 col-4"></hr>
                                    </div>
                                )
                                :<></>
                            }
                            {
                                product === newProducts[0]?
                                (
                                    <div className='d-flex flex-column justify-content-center align-items-center d-lg-none'>
                                        <h1>Sale Products</h1>
                                        <hr className="border-3 border-litle-green opacity-100 col-8"></hr>
                                    </div>
                                )
                                :<></>
                            }
                            {
                                product === newProducts[4]?
                                (
                                    <div className='d-flex flex-column justify-content-center align-items-center d-lg-none'>
                                        <h1>Featured Products</h1>
                                        <hr className="border-3 border-warning opacity-100 col-8"></hr>
                                    </div>
                                )
                                :<></>
                            }
                            {
                                product === newProducts[8]?
                                (
                                    <div className='d-flex flex-column justify-content-center align-items-center d-lg-none'> 
                                        <h1>Latest Arrivals</h1>
                                        <hr className="border-3 border-danger opacity-100 col-8"></hr>
                                    </div>
                                )
                                :<></>
                            }
                            <Product2Home1 {...product}/>
                        </div>
                    ))
                }
            </div>
        </div>
    
    </>
  )
}
