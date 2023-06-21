import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import VideogameDetail from "./components/VideogameDetails/VideogameDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/videogame/:id" component={VideogameDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
