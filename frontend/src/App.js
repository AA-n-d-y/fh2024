import React, { useState } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Payments from "./Payments";
import Login from "./Login";
import SignUp from "./SignUp";
import TeleportResults from "./TeleportResults";

function App() {
    const [teleportDetails, setTeleportDetails] = useState(null); // State to hold teleportation details

    return (
        <Router>
            <Navbar />
            <div className="content"> {/* Fixed typo: classname -> className */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/payments">
                        <Payments teleportDetails={teleportDetails} /> {/* Pass teleportDetails to Payments */}
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/teleportresults">
                        <TeleportResults setTeleportDetails={setTeleportDetails} /> {/* Pass setTeleportDetails to TeleportResults */}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
