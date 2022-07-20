/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Btn } from "../../components/Controls/Button/Button";
import { InputField } from "../../components/Controls/InputField/InputField";
import Loader from "../../components/Loader/Loader";
import { GET_DATA_REQUEST } from "../../sagas/type";
import "./home.css"

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_DATA_REQUEST })
  }, [])

  return (
    <div>
      <div className="context">
        <h1>Home</h1>
      </div>


      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >

    </div>
  )
}

export default Home
