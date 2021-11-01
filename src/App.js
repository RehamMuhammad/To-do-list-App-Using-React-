import "./App.css";
import Login from "./components/login/login";
import Register from "./components/register/register";
import AddTask from "./components/toDo/addTask";
import ViewTasks from "./components/toDo/viewTask";
import Navbar from "./components/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/todo" component={ViewTasks} />
          <Route path="*" component={AddTask} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
