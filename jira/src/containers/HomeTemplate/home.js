import Navbar from "containers/_navbar";
import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

export default function HomeTemplate({ exact, path, component }) {
  if (localStorage.getItem("JiraSignin")) {
    return (
      <>
        {path !== "/" && path !=="/signup" && <Navbar />} 
        <Route exact={exact} path={path} component={component} />
      </>
    );
  }
}
