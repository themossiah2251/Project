import React, { createContext, useState } from "react";
import { getProductData } from "./productsStore";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    const getProductQuantity = (ID) => {
        const product = cartProducts.find(product => product.ID === ID);
        return product ? product.quantity : 0;
    };

    const addOneToCart = async (ID) => {
        if (!ID) {
            console.error('Attempted to add a product with undefined ID');
            return;
        }

        const existingProduct = cartProducts.find(product => product.ID === ID);
        if (existingProduct) {
            const updatedCartProducts = cartProducts.map(product =>
                product.ID === ID ? { ...product, quantity: product.quantity + 1 } : product
            );
            setCartProducts(updatedCartProducts);
        } else {
            const productData = await getProductData(ID);
            if (productData) {
                setCartProducts([...cartProducts, { ...productData, quantity: 1 }]);
            } else {
                console.error('Failed to fetch product data for ID:', ID);
            }
        }
    };

    const removeOneFromCart = (ID) => {
        const updatedCartProducts = cartProducts.map(product =>
            product.ID === ID ? { ...product, quantity: Math.max(product.quantity - 1, 0) } : product
        ).filter(product => product.quantity > 0);

        setCartProducts(updatedCartProducts);
    };

    const deleteFromCart = (ID) => {
        setCartProducts(cartProducts.filter(product => product.ID !== ID));
    };

    const increaseQuantity = (ID) => {
        const updatedProducts = cartProducts.map(product =>
            product.ID === ID ? { ...product, quantity: product.quantity + 1 } : product
        );
        setCartProducts(updatedProducts);
    };

    const decreaseQuantity = (ID) => {
        const updatedProducts = cartProducts.map(product =>
            product.ID === ID && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
        );
        setCartProducts(updatedProducts);
    };

    const getTotalCost = () => {
        return cartProducts.reduce((acc, product) => acc + product.Price * product.quantity, 0);
    };

    return (
        <CartContext.Provider value={{
            products: cartProducts,
            getProductQuantity,
            addOneToCart,
            removeOneFromCart,
            deleteFromCart,
            increaseQuantity,
            decreaseQuantity,
            getTotalCost
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;