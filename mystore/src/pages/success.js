import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Success() {
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        navigate('/store'); // Redirects to the store page
    };

    return (
        <div className="text-center mt-4">
            <h1>Success</h1>
            <p>Your purchase has been completed successfully.</p>
            <Button onClick={handleContinueShopping} variant="primary">Continue Shopping</Button>
        </div>
    );
}

export default Success;
