export const cartReducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case "ADD_TO_CART":
        case "REMOVE_FROM_CART":
        case "CLEAR_CART":
            return {
                ...state,
                cartList: payload.products,
                total: payload.total
            };
        case "UPDATE_PRICE":
            return;
        default:
            throw new Error("No case found!!!");
    }
}