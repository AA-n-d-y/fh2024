import React, { useState } from 'react';

function Payments() {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(null); // true for success, false for failure
    
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
