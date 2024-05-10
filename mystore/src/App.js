import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/navbar';
// Ensure the original Bootstrap import is removed or replaced by Bootswatch if necessary
import './assets/css/bootstrap.min (1).css'; // This ensures the theme is available
import Store from './pages/store';
import Contact from './pages/contact';
import About from './pages/about';
import Success from './pages/success';
import Cancel from './pages/cancel';
import CartProvider from './cartContext';
import Home from './pages/home';
import Footer from './components/footer';

function App() {
    return (
        <CartProvider>
            <Container>
                <BrowserRouter>
                    <NavbarComponent />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="store" element={<Store />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="success" element={<Success />} />
                        <Route path="cancel" element={<Cancel />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </Container>
        </CartProvider>
    );
}

export default App;