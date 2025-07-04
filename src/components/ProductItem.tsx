import React, { memo, FC } from 'react'
import { ProductStatus, type Product } from '../store/CartContextProvider';

type props = {
    product: Product;
    handleClick: (product: Product) => void;
    isInCart?: boolean; // optional flag
}

const ProductItem: FC<props> = memo(({ product, handleClick, isInCart }) => {
    return (
        <div className='p-4 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl my-5'>
            <h3>
                {product.name}{" "}
                <span
                    style={{
                        fontSize: "12px",
                        color: product.status === ProductStatus.IN_STOCK ? "green" : "red",
                        marginLeft: "10px"
                    }}
                >
                    {product.status}
                    {/* {product.status === ProductStatus.IN_STOCK ? "🟢" : "🔴"} */}
                </span>
            </h3>

            <p>Price: ₹{product.price}</p>
            <p>Delivery: {product.delivery}</p>

            <button
                disabled={product.status === ProductStatus.OUT_OF_STOCK}
                className={`cursor-pointer bg-blue-600 hover:bg-blue-700 ${isInCart ? "bg-red-600 hover:bg-red-700" : ""} text-white px-4 py-2 rounded shadow-md transition duration-300 ease-in-out`}
                onClick={() => handleClick(product)}
            >
                {
                    isInCart
                        ? "Remove"
                        : product.status === ProductStatus.OUT_OF_STOCK
                            ? "Out of Stock"
                            : "Add to Cart"
                }
            </button>
        </div>
    )
})

export default ProductItem
