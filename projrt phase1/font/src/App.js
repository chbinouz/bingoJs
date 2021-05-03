import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { AdminPage } from "./pages/AdminPage";
import Home from "./components/Home";
import Signin from "./user/Signin";
import PrivateRoute from './auth/PrivateRoute'
import AdminRoute from './auth/AdminRoute'

//import AdminRoute from './auth/AdminRoute'

function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route path="/signin" exact component={Signin} />  
          <AdminRoute path="/admin" exact component={AdminPage} />  
          <PrivateRoute path="/hr" component={Sidebar} />
          <Route path="/" component={Home} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
