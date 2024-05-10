import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import ProductCard from '../components/productCard'; // Adjust the path as necessary
import { getAllProducts } from '../productsStore'; // Adjust the path as necessary

function Store() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getAllProducts();
                console.log('Fetched products:', productsData);  // Log fetched data
                setProducts(productsData);
                setFilteredProducts(productsData); // Initialize filtered products
            } catch (error) {
                console.error('Failed to load products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const handleSearch = () => {
        const result = products.filter(product =>
        (product.Title?.toLowerCase().includes(searchTerm) ||
            product.Description?.toLowerCase().includes(searchTerm))
        );
        setFilteredProducts(result);
    };

    return (
        <>
            <h1 align="center" className='p-3'>Happy Shopping!</h1>
            <Form className="d-flex mb-4">
                <Form.Control
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="me-2"
                />
                <Button variant="outline-success" onClick={handleSearch}>Search</Button>
            </Form>
            <Row xs={1} md={3} className='g-4'>
                {filteredProducts.length > 0 ? filteredProducts.map((product, idx) => (
                    <Col key={idx} align="center">
                        <ProductCard product={product} />
                    </Col>
                )) : <p>No products found</p>}
            </Row>
        </>
    );
}

export default Store;