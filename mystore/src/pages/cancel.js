import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Cancel() {
    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate('/'); // Redirects to the home page
    };

    return (
        <div className="text-center mt-4">
            <h1>Transaction Canceled</h1>
            <p>Your transaction has been canceled. You can go back to the homepage to continue browsing.</p>
            <Button onClick={handleBackHome} variant="secondary">Back Home</Button>
        </div>
    );
}

export default Cancel;
