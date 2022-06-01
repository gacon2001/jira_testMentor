import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import { Switch } from "react-router-dom";
import { renderRoutes } from "./routes";
import Signin from "./containers/HomeTemplate/Signin";

function App() {
  return (
    <Suspense fallback={<div> Loading....</div>}>
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={Signin} />
        {renderRoutes()}
      </Switch>
    </BrowserRouter>
  </Suspense>
  );
}

export default App;
