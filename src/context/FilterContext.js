import {createContext, useContext, useReducer} from "react";

import { filterReducer } from "../reducer";

const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}

export const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, filterInitialState);

    function initialProductList(products) {
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products,
            }
        })
    }

    const value = {
        products: state.productList,
        initialProductList
    };

    return (
        <FilterContext.Provider value={value}>
            { children }
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext);