import { useDispatch, useSelector } from "react-redux"
import { setSingleProduct } from "../store";


export const useSingleProductStore = () => {
    const {singleProduct} = useSelector(state => state.singleProduct);
    const dispatch = useDispatch();

    const onSetSingleProduct = (product) => {
        dispatch(setSingleProduct(product));
    }

    return{
        onSetSingleProduct,
        ...singleProduct,
        singleProduct,
    }
}
