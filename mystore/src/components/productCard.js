import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../cartContext';

function ProductCard({ product }) {
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);

    console.log("Product Data in Card:", product);
    console.log("Product ID:", product.ID);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <Card>
            <Card.Img variant="top" src={`/images/${product.Image}`} alt={product.Title} />
            <Card.Body>
                <Card.Title>{product.Title}</Card.Title>
                <Card.Text>${product.Price}</Card.Text>
                <Card.Text>{product.Description}</Card.Text>
                {productQuantity > 0 ? (
                    <>
                        <Form as={Row}>
                            <Form.Label column sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                               
                                <Button onClick={() => cart.removeOneFromCart(product.ID)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(product.ID)} className="my-2">Remove from Cart</Button>
                    </>
                ) : (
                    <Button variant="primary" onClick={() => cart.addOneToCart(product.ID)}>Add to Cart</Button>
                )}
            </Card.Body>
        </Card>
    );
}
export default ProductCard;