import React from "react"
import { Navigate } from "react-router-dom"
import { LOGIN_PATH } from "./constants";


function PrivateRoute({ children }) {

  const isToken = localStorage.getItem("token");
  if (!isToken || isToken == "") {
    return <Navigate to={LOGIN_PATH} />
  }
  return children
}

export default PrivateRoute
