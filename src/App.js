import "./App.css";
import Blog from "./componets/Blog";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/people">
          <Blog type="people" />
        </Route>
        <Route path="/yesterday">
          <Blog type="yesterday" />
        </Route>
        <Route path="/today">
          <Blog type="today" />
        </Route>
        <Route path="/nextday">
          <Blog type="nextday" />
        </Route>
        <Route path="/planets">
          <Blog type="planets" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
