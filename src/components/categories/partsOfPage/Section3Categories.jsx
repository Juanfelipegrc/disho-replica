import React, { useEffect, useState } from 'react'
import { products } from '../../../data/products';
import { useCategoryStore } from '../../../hooks';
import { ProductCategories } from '../ProductCategories';
import { useNavigate } from 'react-router-dom';

export const Section3Categories = () => {

    const [newProducts, setNewProducts] = useState([]);
    const [animateCss, setAnimateCss] = useState('')
    const {category, onSetCategory} = useCategoryStore();
    const navigate = useNavigate();

    useEffect(() => {

        setAnimateCss('');

        setTimeout(() => {
            setAnimateCss('animate__animated animate__fadeIn')
        }, 20);
        if(category != ''){
            const tempProducts = products.filter(product => product.categories.includes(category));
            setNewProducts(tempProducts);
        }else{
            const tempProducts = products.filter(product => product.categories.includes('Uncategorized'));
            setNewProducts(tempProducts);
            onSetCategory('Uncategorized')
            navigate('/categories/uncategorized')
        }



    }, [category]);
    


  return (
    <>
    
        <div className={`container-fluid container-lg ${animateCss}`}>
        <div className="row justify-content-between align-items-center my-3">
            <div className="col-6 col-md-6 col-lg-3">
                <p className='d-none d-md-block d-lg-block m-0'>Showing 1–10 of 42 results</p>
                <p className='d-block d-md-none d-lg-none font-small-1 m-0'>Showing 1–10 of 42 results</p>
            </div>

            <div className="col-6 col-md-5 col-lg-3 d-flex justify-content-end">
            <div className="dropdown">
                <button className="btn bg-white border border-0 rounded-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <p className='m-0 me-5 d-inline-block'>Default Sorting</p>
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item active" href="#">Default Sorting</a></li>
                    <li><a className="dropdown-item" href="#">Sort by popularity</a></li>
                    <li><a className="dropdown-item" href="#">Sort by average rating</a></li>
                    <li><a className="dropdown-item" href="#">Sort by latest</a></li>
                    <li><a className="dropdown-item" href="#">Sort by price: low to hight</a></li>
                    <li><a className="dropdown-item" href="#">Sort by price: hight to low</a></li>
                </ul>
                </div>
                </div>
            </div>
            <div className="row">
                {
                    newProducts.map((product, index) => (
                        <div key={index} className="col-lg-3">
                            <ProductCategories {...product}/>
                        </div>
                    ))
                }
            </div>
        </div>
        

    
    </>
  )
}
