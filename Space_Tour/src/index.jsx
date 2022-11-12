/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";

import { Route, Router, Routes } from "@solidjs/router";

import App from "./App";
import Destination from "./Destination";

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/destination/moon" component={Destination} />
        <Route path="/new" element={<p>Life is wierd</p>} />
      </Routes>
    </Router>
  ),
  document.getElementById("root")
);
