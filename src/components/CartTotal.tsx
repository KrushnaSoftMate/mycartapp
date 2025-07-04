import React, { useContext, useMemo } from 'react'
import ProductItem from './ProductItem'
import { CartContext, Product } from '../store/CartContextProvider'
import InfoCard from './InfoCard'

const CartTotal = () => {

    const context = useContext(CartContext)

    if (!context) {
        return (
            <p>Loading...</p>
        )
    }

    const { cart, removeFromCart } = context;

    const total = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.price, 0);
    }, [cart]);

    return (
        <div>
            <h1>CART🛒</h1>
            {
                cart.length === 0 ? (
                    <p>Cart is empty</p>
                ) : (
                    cart.map((product: Product) => {
                        return (
                            <div key={product.id}>
                                <ProductItem
                                    product={product}
                                    handleClick={removeFromCart}
                                    isInCart={true}
                                />
                                {/* <InfoCard item={product} title="Item Debug View" /> */}
                            </div>
                        )
                    })
                )
            }

            <h1>TOTAL: {total}</h1>
        </div>
    )
}

export default CartTotal
