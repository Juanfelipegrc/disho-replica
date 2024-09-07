import React, { useEffect, useState } from 'react'
import {ProductSearchResult, SideBarBlog} from '../..'
import { products } from '../../../data/products';
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';

export const Section1SearchResults = () => {

  const [newProducts, setNewProducts] = useState([]);
  const location = useLocation();


  const homePage = {
    name: 'Home Page',
    date: 'February 26, 2021',
    body: 'Check out our Best Weekly Prices Vestibulum ornare purus sapien, eu tempus turpis pellentesque vitae. In hac habitasse platea dictumst. Nunc sapien lectus, aliquam a',

  }

  useEffect(() => {

    const parsedParams = queryString.parse(location.search);
    const q = parsedParams.q;

    if(q){
      const tempProducts = products.filter(product => product.name.toLowerCase().includes(q.toLowerCase()));
      setNewProducts(tempProducts);
    }
  }, [location.search])
  

  return (
    <>
    
    
        <div className="container-fluid container-lg py-5">
            <div className="row">
                <div className="col-12 col-md-7 col-lg-8">
                    <div className="row">
                      {
                        newProducts.map((productSearch, index) => (
                          <div key={index} className="col-12 col-md-6 col-lg-6">
                            <ProductSearchResult productSearch={productSearch}/>
                          </div>
                        ))
                      }
                      <div className="col-12 col-md-6 col-lg-6">
                        <ProductSearchResult productSearch={homePage}/>
                      </div>
                    </div>
                </div>
                {/* SIDE BAR */}
                <SideBarBlog/>
            </div>
        </div>
    
    
    </>
  )
}
