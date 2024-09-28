import React, { useState } from 'react';

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        setError('');
        alert("Sign up successful!");
        // Here you can add code to send the data to the server
        // e.g., using fetch() or axios
    };

    // Inline styles for the container and border
    const styles = {
        container: {
            maxWidth: '400px',
            margin: '50px auto',
            padding: '20px',
            border: '1px solid #ccc', // Border around the form
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
        paragraph: {
            textAlign: 'center',
        },
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4" style={styles.container}>
                    <h2 style={styles.heading}>Create Account</h2>
                    {error && <div style={styles.error}>{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div style={styles.formGroup}>
                            <label htmlFor="username" style={styles.label}>Username:</label>
                            <input 
                                type="text" 
                                id="username" 
                                style={styles.input} 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                required 
                            />
                        </div>

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

                        <div style={styles.formGroup}>
                            <label htmlFor="confirmPassword" style={styles.label}>Confirm Password:</label>
                            <input 
                                type="password" 
                                id="confirmPassword" 
                                style={styles.input} 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                                required 
                            />
                        </div>

                        <button type="submit" style={styles.button}>Sign Up</button>
                    </form>
                    <p style={styles.paragraph}>
                        Already have an account? <a href="/login">Log in</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
