import React, { useState, useEffect } from 'react';
import { Carousel, Button, Row, Col } from 'react-bootstrap';
import { getAllProducts } from '../productsStore'; // Adjust path as necessary
import ProductCard from '../components/productCard'; // Ensure you have this component
import { useNavigate } from 'react-router-dom';

function Home() {
    const [products, setProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const navigate = useNavigate(); // For navigation

    useEffect(() => {
        getAllProducts().then(data => {
            setProducts(data);
            // Select 3 random products
            setFeaturedProducts(data.sort(() => 0.5 - Math.random()).slice(0, 3));
        }).catch(console.error);
    }, []);

    const goToStore = () => {
        navigate('/store');
    };

    return (
        <>
            <Carousel>
                {products.map((product, idx) => (
                    <Carousel.Item key={product.id || idx} style={{ height: '500px' }}>  {/* Use product.id if available */}
                        <img
                            className="d-block w-100"
                            src={`/images/${product.Image}`}
                            alt={product.title}
                            style={{ height: '100%', objectFit: 'cover' }}
                        />
                        <Carousel.Caption>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <Button variant="primary" onClick={goToStore}>Go to Store</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <Row xs={1} md={3} className="g-4 mt-4"> {/* Adjust grid settings as needed */}
                {featuredProducts.map(product => (
                    <Col key={product.id} align="center"> {/* Use product.id if available */}
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Home;