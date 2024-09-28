import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Payments from "./Payments";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
    return (
      <Router>
        <Navbar/>
        <div classname="content">
          <Switch>
            <Route exact path="/">
              <Home>
                
              </Home>
            </Route>
            <Route path="/payments">
              <Payments>

              </Payments>
            </Route>
			<Route path="/login">
              <Login>

              </Login>
            </Route>
			<Route path="/signup">
              <SignUp>

              </SignUp>
            </Route>
          </Switch>
        </div>
      </Router>
      );
}

export default App;
