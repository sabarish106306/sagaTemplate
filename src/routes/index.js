import React, { Suspense } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomeContainer from "./routerContainer/HomeContainer"
import LoginContainer from "./routerContainer/LoginContainer"
import { HOME_PATH, LOGIN_PATH } from "../utils/constants"
import Loader from "../components/Loader/Loader"
function RouterPage() {
  return (
    <Suspense fallback={<Loader />} >
      <Router>
        <Routes>
          <Route path={HOME_PATH} element={<HomeContainer />} ></Route>
        </Routes>
        <Routes>
          <Route path={LOGIN_PATH} element={<LoginContainer />} ></Route>
        </Routes>
      </Router>
    </Suspense>
  )
}

export default RouterPage
