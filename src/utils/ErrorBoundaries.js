import React, { Component } from "react"

export default class ErrorBountries extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hasError: false
    }
  }


  componentDidCatch(error) {
    if (error) {
      this.setState({
        hasError: true
      })
    }
  }

  render() {
    return this.state.hasError ? <h1>something went wrong</h1> : this.props.children
  }
}
