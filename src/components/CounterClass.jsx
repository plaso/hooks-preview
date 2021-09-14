import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0,
    search: "",
    setShowSearch: false
  }
  onChangeHandler = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  resetCounter = () => {
    this.setState({ count: 0 })
  }

  render() {
    console.log("render")
    return (
      <div>
        <button onClick={this.onChangeHandler}>{this.state.count}</button>
        <button onClick={this.resetCounter}>reset</button>
      </div>
    )
  }
}