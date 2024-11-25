export const getProductList = async (searchTerm) => {
    const response = await fetch(`http://localhost:1305/444/products?name_like=${searchTerm ? searchTerm : ""}`);
    return await response.json();
}

export const getFeaturedProducts = async () => {
    const response = await fetch("http://localhost:1305/444/featured_products");
    return await response.json();
}

export const getProduct = async (productId) => {
    const response = await fetch(`http://localhost:1305/444/products/${productId}`);
    return response.json();
}