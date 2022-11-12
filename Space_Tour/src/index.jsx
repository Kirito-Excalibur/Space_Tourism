/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";

import { Route, Router, Routes } from "@solidjs/router";

import App from "./App";
import Destination from "./Destination";
import Crew from "./Crew";

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/destination" component={Destination} />
        <Route path="/crew" component={Crew} />
      </Routes>
    </Router>
  ),
  document.getElementById("root")
);
