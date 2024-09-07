import { useDispatch, useSelector } from "react-redux"
import { setInputSearchValue, setSearchValue } from "../store";


export const useSearchValueStore = () => {


    const {searchValue, inputSearchValue} = useSelector(state => state.searchValue);
    const dispatch = useDispatch();


    const onSetSearchValue = (value) => {
        dispatch(setSearchValue(value));
    }

    const onSetInputSearchValue = ({target}) => {
        const inputValue = target.value;
        dispatch(setInputSearchValue(inputValue));
    }

  return {
    searchValue,
    inputSearchValue,
    onSetSearchValue,
    onSetInputSearchValue,
  }
}
