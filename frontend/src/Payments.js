import React, { useState } from 'react';
import { NavLink, redirect, useHistory } from 'react-router-dom';
import { useEffect } from 'react';


function Payments({ teleportDetails = {} }) { // Provide a default empty object
    const navigate = useHistory();
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(null); // true for success, false for failure

    const handleLogin = async () => {
        try {
            const res = await fetch("http://localhost:8080" + "/getLogin", {
              method: "GET"
            });
    
            // If the user is not logged in, redirect to login
            if (!(res.status == 200)) {
                navigate.push("/login");
            }
        }    
        catch (error) {}
    };
    useEffect(() => {
        handleLogin();
    }, [])
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Simple validation
        if (!cardNumber || !cardHolderName || !expiryDate || !cvv) {
            setMessage('Please fill in all fields.');
            setIsSuccess(false);
            return;
        }

        // Simulate payment processing
        const paymentSuccessful = await processPayment();

        if (paymentSuccessful) {
            setMessage('Payment processed successfully!');
            setIsSuccess(true);
            // Reset form fields
            setCardNumber('');
            setCardHolderName('');
            setExpiryDate('');
            setCvv('');
        } else {
            setMessage('Payment failed. Please try again.');
            setIsSuccess(false);
        }
    };

    // Simulate payment processing (success or failure)
    const processPayment = () => {
        return new Promise((resolve) => {
            // Simulating a random payment outcome (success/failure)
            const isSuccess = Math.random() > 0.3; // 70% chance of success
            setTimeout(() => resolve(isSuccess), 1000); // Simulate network delay
        });
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Payment Information</h2>
            {/* Display teleportation info summary */}
            <div style={styles.teleportationSummary}>
                <h3 style={styles.summaryHeading}>Teleportation Summary</h3>
                <div><strong>Teleport Time:</strong> {teleportDetails?.teleportTime || 'N/A'}</div>
                <div><strong>Origin:</strong> {teleportDetails?.origin || 'N/A'}</div>
                <div><strong>Destination:</strong> {teleportDetails?.destination || 'N/A'}</div>
                <div><strong>Price (Economy):</strong> {teleportDetails?.price?.economy || 'N/A'}</div>
                <div><strong>Price (Premium Economy):</strong> {teleportDetails?.price?.premiumEconomy || 'N/A'}</div>
                <div><strong>Price (Business):</strong> {teleportDetails?.price?.business || 'N/A'}</div>
                <div><strong>Details:</strong> {teleportDetails?.details || 'N/A'}</div>
            </div>
            {message && (
                <div style={{ ...styles.message, color: isSuccess ? 'green' : 'red' }}>
                    {message}
                </div>
            )}
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Card Number:</label>
                    <input 
                        type="text" 
                        value={cardNumber} 
                        onChange={(e) => setCardNumber(e.target.value)} 
                        required 
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Cardholder Name:</label>
                    <input 
                        type="text" 
                        value={cardHolderName} 
                        onChange={(e) => setCardHolderName(e.target.value)} 
                        required 
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Expiry Date (MM/YY):</label>
                    <input 
                        type="text" 
                        value={expiryDate} 
                        onChange={(e) => setExpiryDate(e.target.value)} 
                        required 
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>CVV:</label>
                    <input 
                        type="text" 
                        value={cvv} 
                        onChange={(e) => setCvv(e.target.value)} 
                        required 
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Pay Now</button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        width: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    teleportationSummary: {
        marginBottom: '20px',
        padding: '10px',
        border: '1px solid #e0e0e0',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
    },
    summaryHeading: {
        marginBottom: '10px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        marginBottom: '5px',
    },
    input: {
        padding: '10px',
        borderRadius: '3px',
        border: '1px solid #ccc',
        width: '100%',
    },
    button: {
        padding: '10px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
    },
    message: {
        marginBottom: '10px',
        textAlign: 'center',
    },
};

export default Payments;
