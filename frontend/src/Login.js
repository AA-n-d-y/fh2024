import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Simple validation
        if (!email || !password) {
            setError("Email and password are required!");
            return;
        }

        setError('');

        // Simulate login processing
        const loginSuccessful = await simulateLogin();

        if (loginSuccessful) {
            setMessage("Login successful!");
            // Reset the form fields
            setEmail('');
            setPassword('');
        } else {
            setMessage("Login failed. Please try again.");
        }
    };

    // Simulate login processing
    const simulateLogin = () => {
        return new Promise((resolve) => {
            const isSuccess = Math.random() > 0.3; // 70% chance of success
            setTimeout(() => resolve(isSuccess), 1000); // Simulate network delay
        });
    };

    const styles = {
        container: {
            maxWidth: '400px',
            margin: '50px auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
        },
        heading: {
            textAlign: 'center',
            marginBottom: '20px',
        },
        formGroup: {
            marginBottom: '15px',
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'normal',
        },
        input: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
        },
        button: {
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
        },
        error: {
            color: 'red',
            marginBottom: '15px',
            textAlign: 'center',
        },
        successMessage: {
            color: 'green', // Message for successful login
            marginBottom: '15px',
            textAlign: 'center',
        },
        failureMessage: {
            color: 'red', // Message for failed login
            marginBottom: '15px',
            textAlign: 'center',
        },
        paragraph: {
            textAlign: 'center',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Log In</h2>
            {error && <div style={styles.error}>{error}</div>}
            {message && (
                <div style={message.includes("failed") ? styles.failureMessage : styles.successMessage}>
                    {message}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        style={styles.input} 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="password" style={styles.label}>Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        style={styles.input} 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>

                <button type="submit" style={styles.button}>Log In</button>
            </form>
            <p style={styles.paragraph}>
                Don't have an account? <a href="/signup">Sign up</a>
            </p>
        </div>
    );
}

export default Login;
