import React, { useEffect, useState } from 'react'
import { Product1Shop3 } from '../Product1Shop3'
import { products } from '../../../data/products'
import { bakeryCategories, cannedGoodsCategories, farmCategories, greensCategories, potablesCategories, saucesCategories, spicesCategories, uncategorizedCategories } from '../../../assets';
import { useNavigate } from 'react-router-dom';
import { useCategoryStore } from '../../../hooks';

export const Section2Shop3 = () => {
    const [newProducts, setNewProducts] = useState([]);
    const navigate = useNavigate();
    const {onSetCategory, categoriesLenght} = useCategoryStore();

    useEffect(() => {
      const tempProducts = products.slice(0, 4)
      setNewProducts(tempProducts)
    }, []);

    

    const onNavigateCategory = (categoryProducts) => {
        onSetCategory(categoryProducts);
        
        navigate(`/categories/${categoryProducts.toLowerCase()}`);
    }
    
  return (
    <>
    
    
        <div className="container-fluid container-lg my-5">
            <div className="row">
                <div className="col-12 col-md-8 col-lg-8">
                    <div>
                        <h3 className='d-none d-md-block d-lg-block'>Best Week Prices</h3>
                        <h1 className='d-block d-md-none d-lg-none'>Best Week Prices</h1>
                        <hr className="d-none d-md-block d-lg-block border-3 border-danger opacity-100 col-1"></hr>
                        <hr className="d-block d-md-none d-lg-none border-3 border-danger opacity-100 col-3"></hr>
                    </div>
                    <div className="row">
                        {
                            newProducts.map((product, index) => (
                                <div key={index} className="col-12 my-3">
                                    <Product1Shop3 {...product}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                    <div>
                        <h3 className='d-none d-md-block d-lg-block'>Categories</h3>
                        <h1 className='d-block d-md-none d-lg-none'>Categories</h1>
                        <hr className="d-none d-md-block d-lg-block border-3 border-litle-green opacity-100 col-1"></hr>
                        <hr className="d-block d-md-none d-lg-none border-3 border-litle-green opacity-100 col-3"></hr>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div  className="p-3 col-6 col-lg-5" >
                            <div role='button' onClick={() => onNavigateCategory('Uncategorized')} className="col-12 overflow-hidden border border-0 rounded-5">
                                <img className='w-100 h-100 object-fit-cover border border-0 rounded-5' src={uncategorizedCategories} alt="" />
                                <h5 className='text-center mt-1'>Uncategorized ({categoriesLenght.Uncategorized})</h5>
                            </div>
                        </div>
                        <div  className="p-3 col-6 col-lg-5" >
                            <div role='button' onClick={() => onNavigateCategory('Spices')} className="col-12 overflow-hidden border border-0 rounded-5">
                                <img className='w-100 h-100 object-fit-cover' src={spicesCategories} alt="" />
                                <h5 className='text-center mt-1'>Spices ({categoriesLenght.Spices})</h5>
                            </div>
                        </div>
                        <div  className="p-3 col-6 col-lg-5" >
                            <div role='button' onClick={() => onNavigateCategory('Sauces')} className="col-12 overflow-hidden border border-0 rounded-5">
                                <img className='w-100 h-100 object-fit-cover' src={saucesCategories} alt="" />
                                <h5 className='text-center mt-1'>Sauces ({categoriesLenght.Sauces})</h5>
                            </div>
                        </div>
                        <div  className="p-3 col-6 col-lg-5" >
                            <div role='button' onClick={() => onNavigateCategory('Potables')} className="col-12 overflow-hidden border border-0 rounded-5">
                                <img className='w-100 h-100 object-fit-cover' src={potablesCategories} alt="" />
                                <h5 className='text-center mt-1'>Potables ({categoriesLenght.Potables})</h5>
                            </div>
                        </div>
                        <div  className="p-3 col-6 col-lg-5" >
                            <div role='button' onClick={() => onNavigateCategory('Greens')} className="col-12 overflow-hidden border border-0 rounded-5">
                                <img className='w-100 h-100 object-fit-cover' src={greensCategories} alt="" />
                                <h5 className='text-center mt-1'>Greens ({categoriesLenght.Greens})</h5>
                            </div>
                        </div>
                        <div  className="p-3 col-6 col-lg-5" >
                            <div role='button' onClick={() => onNavigateCategory('Farm')} className="col-12 overflow-hidden border border-0 rounded-5">
                                <img className='w-100 h-100 object-fit-cover' src={farmCategories} alt="" />
                                <h5 className='text-center mt-1'>Farm ({categoriesLenght.Farm})</h5>
                            </div>
                        </div>
                        <div  className="p-3 col-6 col-lg-5" >
                            <div role='button' onClick={() => onNavigateCategory('Canned Goods')} className="col-12 overflow-hidden border border-0 rounded-5">
                                <img className='w-100 h-100 object-fit-cover' src={cannedGoodsCategories} alt="" />
                                <h5 className='text-center mt-1'>Canned Goods ({categoriesLenght.CannedGoods})</h5>
                            </div>
                        </div>
                        <div  className="p-3 col-6 col-lg-5" >
                            <div role='button' onClick={() => onNavigateCategory('Bakery')} className="col-12 overflow-hidden border border-0 rounded-5">
                                <img className='w-100 h-100 object-fit-cover' src={bakeryCategories} alt="" />
                                <h5 className='text-center mt-1'>Bakery ({categoriesLenght.Bakery})</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    </>
  )
}
