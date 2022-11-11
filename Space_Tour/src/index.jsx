/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";

import { Route, Router, Routes } from "@solidjs/router";

import App from "./App";
import Destination from "./pages/Destination";

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/destination/:name" component={Destination} />
      </Routes>
    </Router>
  ),
  document.getElementById("root")
);
