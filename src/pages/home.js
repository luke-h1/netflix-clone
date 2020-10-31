/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
// import { JumbotronContainer } from "../containers/jumbotron";
// import { FooterContainer } from "../containers/footer";
// import { FaqsContainer } from "../containers/faqs";
import * as ROUTES from "../constants/routes";

export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
      </BrowserRouter>
    </>
  );
}
