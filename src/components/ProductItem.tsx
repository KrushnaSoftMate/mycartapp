import React from "react";
import { Product, ProductStatus } from "../store/CartContextProvider";
import { motion } from "framer-motion";

type Props = {
    product: Product;
    handleClick: (product: Product) => void;
    isInCart?: boolean;
};

const ProductItem: React.FC<Props> = ({ product, handleClick, isInCart }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: product.id * 0.1 // Stagger animation based on product ID
            }}
            className="p-4 mt-2 border border-gray-300 rounded-xl shadow-md bg-white hover:shadow-lg transition duration-300"
        >
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold tracking-wide text-gray-800">
                    {product.name}
                </h3>
                <span
                    className={`text-sm font-medium px-2 py-1 rounded-full ${product.status === ProductStatus.IN_STOCK
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                        }`}
                >
                    {product.status}
                </span>
            </div>

            <p className="text-gray-600 text-sm mb-2">
                Delivery:{" "}
                <span className="font-semibold text-blue-600">{product.delivery}</span>
            </p>

            <p className="text-lg font-semibold text-gray-900 mb-3">
                ₹{product.price}
            </p>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleClick(product)}
                disabled={product.status === ProductStatus.OUT_OF_STOCK}
                className={`w-full px-4 py-2 rounded-lg text-white font-semibold transition duration-300 cursor-pointer ${product.status === ProductStatus.OUT_OF_STOCK
                    ? "bg-gray-400 cursor-not-allowed"
                    : isInCart
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
            >
                {product.status === ProductStatus.OUT_OF_STOCK
                    ? "Out of Stock"
                    : isInCart
                        ? "Remove from Cart"
                        : "Add to Cart"}
            </motion.button>
        </motion.div>
    );
};

export default ProductItem;
