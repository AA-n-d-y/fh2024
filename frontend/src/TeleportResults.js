import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function TeleportationResults({ setTeleportDetails }) {
    const navigate = useHistory();
    const buttonColor = '#007BFF'; // Define the button color here

    const sampleTeleportations = [
        {
            teleportTime: "12:50",
            arrivalTime: "Instant",
            duration: "0 seconds",
            stops: "Direct",
            origin: "Vancouver (Teleportation Pad #1)",
            destination: "Tokyo (Portal Hub NRT)",
            price: {
                economy: "$500",
                premiumEconomy: "$750",
                business: "$1200",
            },
            details: "Includes instant arrival with premium energy shields in Business Class",
        },
        {
            teleportTime: "00:05",
            arrivalTime: "Instant",
            duration: "0 seconds",
            stops: "1 Stop (Intermediary Hub)",
            stopDetails: "Teleportation Hub Singapore",
            origin: "Vancouver (Teleportation Pad #2)",
            destination: "Tokyo (Portal Hub HND)",
            price: {
                economy: "$950",
                premiumEconomy: "-",
                business: "-",
            },
            details: "Includes travel through secure All Nippon Portals",
        },
    ];

    const history = useHistory(); // React Router v5 useHistory hook

    const handleRedirect = (teleport) => {
        const isLoggedIn = localStorage.getItem("isLoggedIn"); // Check if user is logged in
        if (isLoggedIn) {
            setTeleportDetails(teleport); // Set selected teleport details
            history.push("/payments"); // Redirect to Payments if logged in
        } else {
            history.push("/login"); // Redirect to Login if not logged in
        }
    };

    const styles = {
        container: {
            maxWidth: '800px',
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
        teleportContainer: {
            padding: '10px',
            borderBottom: '1px solid #ccc',
        },
        teleportDetails: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '10px',
        },
        priceOptions: {
            display: 'flex',
            justifyContent: 'space-between',
            textAlign: 'center',
        },
        priceBox: {
            flex: '1',
            padding: '10px',
        },
        teleportInfo: {
            flex: '3',
        },
        stops: {
            fontWeight: 'bold',
            color: 'gray',
        },
        bold: {
            fontWeight: 'bold',
        },
        priceText: {
            color: buttonColor,
            cursor: 'pointer',
            transition: 'color 0.3s',
        },
        priceTextHover: {
            color: '#0056b3', // Darker shade on hover
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Teleportation Results</h2>
            {sampleTeleportations.map((teleport, index) => (
                <div key={index} style={styles.teleportContainer}>
                    <div style={styles.teleportDetails}>
                        <div style={styles.teleportInfo}>
                            <div>
                                <span style={styles.bold}>{teleport.teleportTime}</span> - {teleport.origin} 
                            </div>
                            <div>
                                <span style={styles.bold}>{teleport.arrivalTime}</span> - {teleport.destination}
                            </div>
                            <div>
                                <span>{teleport.duration}</span> | <span style={styles.stops}>{teleport.stops}</span>
                            </div>
                            {teleport.stopDetails && <div>{teleport.stopDetails}</div>}
                            <div>{teleport.details}</div>
                        </div>
                    </div>
                    <div style={styles.priceOptions}>
                        <div style={styles.priceBox}>
                            <div>Economy</div>
                            <div
                                style={styles.priceText}
                                onMouseEnter={(e) => (e.currentTarget.style.color = styles.priceTextHover.color)}
                                onMouseLeave={(e) => (e.currentTarget.style.color = buttonColor)}
                                onClick={() => handleRedirect(teleport)}
                            >
                                {teleport.price.economy}
                            </div>
                        </div>
                        <div style={styles.priceBox}>
                            <div>Premium Economy</div>
                            <div
                                style={styles.priceText}
                                onMouseEnter={(e) => (e.currentTarget.style.color = styles.priceTextHover.color)}
                                onMouseLeave={(e) => (e.currentTarget.style.color = buttonColor)}
                                onClick={teleport.price.premiumEconomy !== '-' ? () => handleRedirect(teleport) : null}
                            >
                                {teleport.price.premiumEconomy !== '-' ? teleport.price.premiumEconomy : 'Unavailable'}
                            </div>
                        </div>
                        <div style={styles.priceBox}>
                            <div>Business Class</div>
                            <div
                                style={styles.priceText}
                                onMouseEnter={(e) => (e.currentTarget.style.color = styles.priceTextHover.color)}
                                onMouseLeave={(e) => (e.currentTarget.style.color = buttonColor)}
                                onClick={teleport.price.business !== '-' ? () => handleRedirect(teleport) : null}
                            >
                                {teleport.price.business !== '-' ? teleport.price.business : 'Unavailable'}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TeleportationResults;

// import React from 'react';
// import { useHistory } from 'react-router-dom';

// function TeleportationResults({ setTeleportDetails }) {
//     const buttonColor = '#007BFF'; // Define the button color here

//     const sampleTeleportations = [
//         {
//             teleportTime: "12:50",
//             arrivalTime: "Instant",
//             duration: "0 seconds",
//             stops: "Direct",
//             origin: "Vancouver (Teleportation Pad #1)",
//             destination: "Tokyo (Portal Hub NRT)",
//             price: {
//                 economy: "$500",
//                 premiumEconomy: "$750",
//                 business: "$1200",
//             },
//             details: "Includes instant arrival with premium energy shields in Business Class",
//         },
//         {
//             teleportTime: "00:05",
//             arrivalTime: "Instant",
//             duration: "0 seconds",
//             stops: "1 Stop (Intermediary Hub)",
//             stopDetails: "Teleportation Hub Singapore",
//             origin: "Vancouver (Teleportation Pad #2)",
//             destination: "Tokyo (Portal Hub HND)",
//             price: {
//                 economy: "$950",
//                 premiumEconomy: "-",
//                 business: "-",
//             },
//             details: "Includes travel through secure All Nippon Portals",
//         },
//     ];

//     const history = useHistory(); // React Router v5 useHistory hook

//     const handleRedirect = (teleport) => {
//         const isLoggedIn = localStorage.getItem("isLoggedIn"); // Check if user is logged in
//         if (isLoggedIn) {
//             setTeleportDetails(teleport); // Set selected teleport details
//             history.push("/payments"); // Redirect to Payments if logged in
//         } else {
//             // Redirect to Login with teleport details
//             history.push({
//                 pathname: "/login",
//                 state: { teleportDetails: teleport }, // Pass teleport details to Login
//             });
//         }
//     };

//     const styles = {
//         container: {
//             maxWidth: '800px',
//             margin: '50px auto',
//             padding: '20px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//             backgroundColor: '#fff',
//         },
//         heading: {
//             textAlign: 'center',
//             marginBottom: '20px',
//         },
//         teleportContainer: {
//             padding: '10px',
//             borderBottom: '1px solid #ccc',
//         },
//         teleportDetails: {
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             paddingBottom: '10px',
//         },
//         priceOptions: {
//             display: 'flex',
//             justifyContent: 'space-between',
//             textAlign: 'center',
//         },
//         priceBox: {
//             flex: '1',
//             padding: '10px',
//         },
//         teleportInfo: {
//             flex: '3',
//         },
//         stops: {
//             fontWeight: 'bold',
//             color: 'gray',
//         },
//         bold: {
//             fontWeight: 'bold',
//         },
//         priceText: {
//             color: buttonColor,
//             cursor: 'pointer',
//             transition: 'color 0.3s',
//         },
//         priceTextHover: {
//             color: '#0056b3', // Darker shade on hover
//         },
//     };

//     return (
//         <div style={styles.container}>
//             <h2 style={styles.heading}>Teleportation Results</h2>
//             {sampleTeleportations.map((teleport, index) => (
//                 <div key={index} style={styles.teleportContainer}>
//                     <div style={styles.teleportDetails}>
//                         <div style={styles.teleportInfo}>
//                             <div>
//                                 <span style={styles.bold}>{teleport.teleportTime}</span> - {teleport.origin} 
//                             </div>
//                             <div>
//                                 <span style={styles.bold}>{teleport.arrivalTime}</span> - {teleport.destination}
//                             </div>
//                             <div>
//                                 <span>{teleport.duration}</span> | <span style={styles.stops}>{teleport.stops}</span>
//                             </div>
//                             {teleport.stopDetails && <div>{teleport.stopDetails}</div>}
//                             <div>{teleport.details}</div>
//                         </div>
//                     </div>
//                     <div style={styles.priceOptions}>
//                         <div style={styles.priceBox}>
//                             <div>Economy</div>
//                             <div
//                                 style={styles.priceText}
//                                 onMouseEnter={(e) => (e.currentTarget.style.color = styles.priceTextHover.color)}
//                                 onMouseLeave={(e) => (e.currentTarget.style.color = buttonColor)}
//                                 onClick={() => handleRedirect(teleport)}
//                             >
//                                 {teleport.price.economy}
//                             </div>
//                         </div>
//                         <div style={styles.priceBox}>
//                             <div>Premium Economy</div>
//                             <div
//                                 style={styles.priceText}
//                                 onMouseEnter={(e) => (e.currentTarget.style.color = styles.priceTextHover.color)}
//                                 onMouseLeave={(e) => (e.currentTarget.style.color = buttonColor)}
//                                 onClick={teleport.price.premiumEconomy !== '-' ? () => handleRedirect(teleport) : null}
//                             >
//                                 {teleport.price.premiumEconomy !== '-' ? teleport.price.premiumEconomy : 'Unavailable'}
//                             </div>
//                         </div>
//                         <div style={styles.priceBox}>
//                             <div>Business Class</div>
//                             <div
//                                 style={styles.priceText}
//                                 onMouseEnter={(e) => (e.currentTarget.style.color = styles.priceTextHover.color)}
//                                 onMouseLeave={(e) => (e.currentTarget.style.color = buttonColor)}
//                                 onClick={teleport.price.business !== '-' ? () => handleRedirect(teleport) : null}
//                             >
//                                 {teleport.price.business !== '-' ? teleport.price.business : 'Unavailable'}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default TeleportationResults;
