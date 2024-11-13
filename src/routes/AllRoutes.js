import { Routes, Route } from 'react-router-dom';
import {HomePage, ProductsList} from "../pages";

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsList />} />
            </Routes>
        </>
    );
};

export default AllRoutes;
