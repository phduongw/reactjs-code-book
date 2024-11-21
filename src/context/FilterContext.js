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

    function bestSeller(products) {
        return state.bestSellerOnly ? products.filter(item => item.best_seller) : products;
    }

    function instock(products) {
        return state.onlyInStock ? products.filter(item => item.in_stock) : products;
    }

    function sort(products) {
        console.log("Call sort and State: ", state)
        if (state.sortBy === "highToLow") {
            return products.sort((a, b) => Number(a.price) - Number(b.price));
        }

        if (state.sortBy === "lowToHigh") {
            return products.sort((a, b) => Number(b.price) - Number(a.price));
        }

        return products;
    }

    function rating(products) {
        const ratings = state.ratings;
        switch (ratings) {
            case "4_STAR_ABOVE":
                return products.filter(item => item.rating >= 4)
            case "3_STAR_ABOVE":
                return products.filter(item => item.rating >= 3)
            case "2_STAR_ABOVE":
                return products.filter(item => item.rating >= 2)
            case "1_STAR_ABOVE":
                return products.filter(item => item.rating >= 1)
            default:
                return products;
        }
    }

    const filteredProductList = rating(sort(instock(bestSeller(state.productList))));

    const value = {
        state,
        dispatch,
        products: filteredProductList,
        initialProductList
    };

    return (
        <FilterContext.Provider value={value}>
            { children }
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext);