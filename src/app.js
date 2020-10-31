/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { JumbotronContainer } from "./containers/jumbotron";
import { FooterContainer } from "./containers/footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/">
          <JumbotronContainer />
          <FooterContainer />
        </Route>
      </BrowserRouter>
    </>
  );
}
// https://www.youtube.com/watch?v=x_EEwGe-a9o
