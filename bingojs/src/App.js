import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import UpdateHr from "./components/admin/UpdateHr";
import AddHr from "./components/admin/AddHr";
import { AdminPage } from "./pages/AdminPage";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="container">
        <br />
        <Switch>
          <Route path="/admin" exact component={AdminPage} />
          <Route path="/edit/:id" component={UpdateHr} />
          <Route path="/AddHr" component={AddHr} />
          <Route path="/hr" component={Sidebar} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
