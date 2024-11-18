import { Routes, Route } from 'react-router-dom';
import { HomePage, ProductDetail, ProductsList } from "../pages";

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsList />} />
                <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>
        </>
    );
};

export default AllRoutes;
