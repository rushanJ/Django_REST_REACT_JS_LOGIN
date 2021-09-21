import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home/Home";
// import Login from "./components/pages/Login/Login";
import Students from "./components/pages/Students/Students"
import Student from "./components/pages/Students/Student"
import NewStudent from "./components/pages/Students/NewStudent"


import Login from "./components/pages/Login/Login";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Home" exact component={Home} />
          <Route path="/students" exact component={Students} />
          <Route path="/students/:id" exact component={Student} />
          <Route path="/newStudent" exact component={Students} />
          <Route path="/student/New" exact component={NewStudent} />


        </Switch>
      </div>
    </Router>
  );
}

export default App;
