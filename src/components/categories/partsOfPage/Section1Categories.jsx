import React, { useEffect } from 'react'
import { bakeryCategories, cannedGoodsCategories, farmCategories, greensCategories, potablesCategories, saucesCategories, spicesCategories, uncategorizedCategories } from '../../../assets'
import { useCategoryStore } from '../../../hooks'
import { useNavigate } from 'react-router-dom'

export const Section1Categories = () => {

    const navigate = useNavigate();

    const {categoriesLenght, onSetCategory} = useCategoryStore();

    const onNavigateCategory = (categoryProducts) => {
        onSetCategory(categoryProducts);
        navigate(`/categories/${categoryProducts.toLowerCase()}`);
    }

    

  return (
    <>
    
        <div className="container-fluid d-flex justify-content-center align-items-center p-3 p-md-0 p-lg-0 m-0 bg-white">
            <div className="row col-12 d-flex justify-content-center align-items-center">
                <div  className="p-0 col-4 col-md col-lg-1" >
                    <div role='button' onClick={() => onNavigateCategory('Uncategorized')} className="col-12 overflow-hidden border border-0 rounded-2 button-category" >
                        <img className='w-100 h-100 object-fit-cover border border-0 rounded-2' src={uncategorizedCategories} alt="" />
                        <h6 className='text-center mt-1'>Uncategorized ({categoriesLenght.Uncategorized})</h6>
                    </div>
                </div>
                <div  className="p-0 col-4 col-md col-lg-1" >
                    <div role='button' onClick={() => onNavigateCategory('Spices')} className="col-12 overflow-hidden border border-0 rounded-2 button-category">
                        <img className='w-100 h-100 object-fit-cover' src={spicesCategories} alt="" />
                        <h6 className='text-center mt-1'>Spices ({categoriesLenght.Spices})</h6>
                    </div>
                </div>
                <div  className="p-0 col-4 col-md col-lg-1" >
                    <div role='button' onClick={() => onNavigateCategory('Sauces')} className="col-12 overflow-hidden border border-0 rounded-2 button-category">
                        <img className='w-100 h-100 object-fit-cover' src={saucesCategories} alt="" />
                        <h6 className='text-center mt-1'>Sauces ({categoriesLenght.Sauces})</h6>
                    </div>
                </div>
                <div  className="p-0 col-4 col-md col-lg-1" >
                    <div role='button' onClick={() => onNavigateCategory('Potables')} className="col-12 overflow-hidden border border-0 rounded-2 button-category">
                        <img className='w-100 h-100 object-fit-cover' src={potablesCategories} alt="" />
                        <h6 className='text-center mt-1'>Potables ({categoriesLenght.Potables})</h6>
                    </div>
                </div>
                <div  className="p-0 col-4 col-md col-lg-1" >
                    <div role='button' onClick={() => onNavigateCategory('Greens')} className="col-12 overflow-hidden border border-0 rounded-2 button-category">
                        <img className='w-100 h-100 object-fit-cover' src={greensCategories} alt="" />
                        <h6 className='text-center mt-1'>Greens ({categoriesLenght.Greens})</h6>
                    </div>
                </div>
                <div  className="p-0 col-4 col-md col-lg-1" >
                    <div role='button' onClick={() => onNavigateCategory('Farm')} className="col-12 overflow-hidden border border-0 rounded-2 button-category">
                        <img className='w-100 h-100 object-fit-cover' src={farmCategories} alt="" />
                        <h6 className='text-center mt-1'>Farm ({categoriesLenght.Farm})</h6>
                    </div>
                </div>
                <div  className="p-0 col-4 col-md col-lg-1" >
                    <div role='button' onClick={() => onNavigateCategory('Canned Goods')} className="col-12 overflow-hidden border border-0 rounded-2 button-category">
                        <img className='w-100 h-100 object-fit-cover' src={cannedGoodsCategories} alt="" />
                        <h6 className='text-center mt-1'>Canned Goods ({categoriesLenght.CannedGoods})</h6>
                    </div>
                </div>
                <div  className="p-0 col-4 col-md col-lg-1" >
                    <div role='button' onClick={() => onNavigateCategory('Bakery')} className="col-12 overflow-hidden border border-0 rounded-2 button-category">
                        <img className='w-100 h-100 object-fit-cover' src={bakeryCategories} alt="" />
                        <h6 className='text-center mt-1'>Bakery ({categoriesLenght.Bakery})</h6>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}
