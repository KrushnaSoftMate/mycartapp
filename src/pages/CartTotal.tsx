import React, { useContext, useMemo } from "react";
import ProductItem from "../components/ProductItem";
import { CartContext, Product } from "../store/CartContextProvider";
import { AnimatePresence, motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const CartTotal: React.FC = () => {
    const context = useContext(CartContext);

    if (!context) {
        return <p className="text-red-600">Cart not available</p>;
    }

    const { cart, removeFromCart } = context;

    const total = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.price, 0);
    }, [cart]);

    return (
        <PageWrapper>
            <section className="p-4 md:p-6">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4 uppercase tracking-wide">
                    🛒 Your Cart
                </h1>

                {cart.length === 0 ? (
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                        }}
                        className="text-center text-gray-500"
                    >Cart is empty 😐</motion.p>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <AnimatePresence>
                            {cart.map((product: Product) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <ProductItem
                                        product={product}
                                        handleClick={removeFromCart}
                                        isInCart={true}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                    }}
                    className="mt-8 p-4 max-w-md mx-auto bg-white shadow-md rounded-lg text-center"
                >
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        Total Amount {" "}
                        <motion.span
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 1,
                                ease: "easeInOut",
                            }}
                            className="inline-block text-2xl"
                        >
                            💳
                        </motion.span>
                    </h3>
                    <p className="text-2xl font-bold text-green-600">₹{total}</p>
                </motion.div>
            </section>
        </PageWrapper>
    );
};

export default CartTotal;
