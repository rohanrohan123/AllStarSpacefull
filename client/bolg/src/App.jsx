// import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
 import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context} from "./context/context"
function App() {
  const {user}=useContext(Context)
  return (
    <Router>
      {/* <Topbar /> */}
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        {/* <Route path="/register" ><Register/> </Route> */}
        {/* {user ? <Homepage /> : <Register />} */}
        <Route exact path="/allstar"> {user ? <Homepage /> : <Login />} </Route>
        <Route exact path="/write">{user ? <Write /> : <Login />}</Route>
        <Route exact path="/settings">{user ? <Settings /> : <Login/>}</Route>
        <Route exact path="/post/:postId">
        <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
