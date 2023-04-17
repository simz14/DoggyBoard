import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  //ONCE THERE IS A TOKEN GONNA COMPLETE IT
  /*if (token) {
    return <Navigate to="/" />;
  }*/
  return children;
};
