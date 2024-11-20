import { useState, useEffect} from 'react';
import { ProductCard } from "../../../components";

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch("http://localhost:1305/featured_products");
            return await response.json();
        }

        fetchProduct()
            .then(data => {
                setProducts(data);
            });
    }, [])

    return (
        <section>
            <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured
                eBooks</h1>
            <div className="flex flex-wrap justify-center lg:flex-row">
                {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    )
                )}
            </div>
        </section>
    );
};

export default FeaturedProducts;
