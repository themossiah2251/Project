import React, { useState, useContext, useEffect } from 'react';
import { Button, Navbar, Modal, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { CartContext } from '../cartContext';

function NavbarComponent() {
    const { products, getTotalCost, increaseQuantity, decreaseQuantity, deleteFromCart } = useContext(CartContext);
    const [show, setShow] = useState(false);
    const [totalCost, setTotalCost] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const cost = getTotalCost();
        setTotalCost(cost.toFixed(2));
    }, [products, getTotalCost]);

    const checkout = async () => {
        try {
            const response = await fetch('http://localhost:4023/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ products })
            });
            const { url } = await response.json();
            if (url) {
                window.location.href = url; // Redirect user to Stripe's checkout page
            }
        } catch (error) {
            console.error('Checkout failed:', error);
        }
    };

    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="/" exact style={{ color: 'white' }}>KoolKomiks</Navbar.Brand>
                <Navbar.Toggle />
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/" exact style={{ color: 'white' }}>Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact" style={{ color: 'white' }}>Contact</Nav.Link>
                    <Nav.Link as={NavLink} to="/about" style={{ color: 'white' }}>About Us</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Button onClick={handleShow}>Cart ({products.length})</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {products.length > 0 ? (
                        <>
                            <p>Items in your cart:</p>
                            {products.map((product, idx) => (
                                <div key={idx} className="d-flex justify-content-between align-items-center">
                                    <p>{product.Title} - ${product.Price} x {product.quantity}</p>
                                    <div>
                                        <Button variant="secondary" size="sm" onClick={() => decreaseQuantity(product.ID)}>-</Button>
                                        <Button variant="secondary" size="sm" onClick={() => increaseQuantity(product.ID)}>+</Button>
                                        <Button variant="danger" size="sm" onClick={() => deleteFromCart(product.ID)}>Remove</Button>
                                    </div>
                                </div>
                            ))}
                            <h1>Total: ${totalCost}</h1>
                            <Button variant="success" onClick={checkout}>Purchase items!</Button>
                        </>
                    ) : (
                        <h1>There are no items in your cart.</h1>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default NavbarComponent;