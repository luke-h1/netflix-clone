/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/browse">
          <Browse />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
      </BrowserRouter>
    </>
  );
}
// https://www.youtube.com/watch?v=x_EEwGe-a9o
