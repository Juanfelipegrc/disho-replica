import { useDispatch, useSelector } from "react-redux"
import { resetStateCategoriesLength, setCategoriesLenght, setCategory } from "../store/slices";
import { useEffect } from "react";
import { products } from "../data/products";


export const useCategoryStore = () => {
  
    const {category, categoriesLenght} = useSelector(state => state.category);
    const dispatch = useDispatch();


    const onSetCategory = (category) => {
        dispatch(setCategory(category))
    };

    const onResetStateCategoriesLength = () => {
        dispatch(resetStateCategoriesLength());
    }



    const calculateCategoriesLenght = () => {

        dispatch(resetStateCategoriesLength());

        const initialCategoriesLength = {
            Uncategorized: 0,
            Spices: 0,
            Sauces: 0,
            Potables: 0,
            Greens: 0,
            Farm: 0,
            CannedGoods: 0,
            Bakery: 0,
        }

        let updatedCategoriesLenght = {...initialCategoriesLength};

        products.forEach(product => {
          const tempCategories = product.categories;
          tempCategories.forEach(category => {
              const formattedCategory = category.replace(/\s+/g, '');
              if(updatedCategoriesLenght[formattedCategory] !== undefined){
                  updatedCategoriesLenght[formattedCategory] += 1;
              }
          });
        });
  
        dispatch(setCategoriesLenght(updatedCategoriesLenght));
    }    
    


    return{
        category,
        onSetCategory,
        categoriesLenght,
        onResetStateCategoriesLength,
        calculateCategoriesLenght,
    }

}
