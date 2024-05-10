import Button from "react-bootstrap/Button";
import { CartContext } from "../cartContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";

export function CartProduct(props) {

    const cart = useContext(CartContext);
    const ID = props.ID;
    const quantity = props.quantity;
    const productData = getProductData(ID);
    return (
        <>
            <h1> {productData.title}</h1>
            <p> {quantity} total</p>
            <p>${(quantity * productData.price).toFixed(2)}</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(ID)}>Remove</Button>
        </>

    )
}

export default CartProduct;