import { Home } from "./components/pages/homepage";
import { BlogPost } from "./components/pages/BlogPost";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./style.css";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:slug">
          <BlogPost />
        </Route>
      </Switch>
    </Router>
  );
};
