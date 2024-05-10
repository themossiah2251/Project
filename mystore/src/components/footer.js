import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark text-white mt-4">
            <Container fluid className="py-3">
                <Row>
                    <Col md={6} className="text-left">
                        <p>© {new Date().getFullYear()} KoolKomiks</p>
                    </Col>
                    <Col md={6} className="text-right">
                        <a href="https://facebook.com" className="text-white px-2">
                            <i className="fa fa-facebook-official"></i>
                        </a>
                        <a href="https://twitter.com" className="text-white px-2">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" className="text-white px-2">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;