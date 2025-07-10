import React, { useContext } from "react";
import ProductItem from "../components/ProductItem";
import { CartContext } from "../store/CartContextProvider";
import PageWrapper from "../components/PageWrapper";

const ProductList: React.FC = () => {
    const cartContext = useContext(CartContext);

    if (!cartContext) {
        return <p className="text-red-600">Loading context...</p>;
    }

    const { initialProducts, addToCart } = cartContext;

    return (
        <PageWrapper>
            <section className="p-4 md:p-6">
                <h2 className="text-2xl font-bold text-gray-800 tracking-wide mb-4 text-center uppercase">
                    All Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {initialProducts.map((product) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                            handleClick={addToCart}
                            isInCart={false}
                        />
                    ))}
                </div>
            </section>
        </PageWrapper>
    );
};

export default ProductList;
