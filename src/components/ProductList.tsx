import React, { useContext } from 'react'
import ProductItem from './ProductItem'
import { CartContext, Product } from '../store/CartContextProvider';

const ProductList = () => {

    const context = useContext(CartContext);

    if (!context) {
        return <p>Loading...</p>
    }

    const { initialProducts: products, addToCart } = context;

    return (
        <div className='m-6 p-3'>
            <div className='text-sm md:text-base lg:text-2xl bg-yellow-100 p-3 font-bold text-center tracking-widest'>PRODUCTS🛒</div>
            <div className='flex flex-wrap gap-5'>
                {
                    products.map((product: Product) => {
                        return (
                            <ProductItem
                                key={product.id}
                                product={product}
                                handleClick={addToCart}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductList
