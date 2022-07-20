import React from "react"
import Login from "../../pages/Login/Login"
import ErrorBountries from "../../utils/ErrorBoundaries"

function LoginContainer() {
  return (
    <>
      <ErrorBountries>
        <Login />
      </ErrorBountries>
    </>
  )
}

export default LoginContainer
