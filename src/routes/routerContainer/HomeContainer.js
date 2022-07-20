import React from "react"
import Home from "../../pages/Home/Home"
import ErrorBountries from "../../utils/ErrorBoundaries"
// import PrivateRoute from "../../utils/PrivateRoute"

function HomeContainer() {
  return (
    <>
      {/* <PrivateRoute> */}
      <ErrorBountries>
        <Home />
      </ErrorBountries>
      {/* </PrivateRoute> */}
    </>
  )
}

export default HomeContainer
