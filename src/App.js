import Homepage from "./components/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/movie/:id" exact component={MovieDetail} /> */}
          <Route path="/" component={Homepage} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
