import React, { Component } from 'react';

const INITIAL_TITLE = "HOOKS"

export default class InputTitleClass extends Component {
  state = {
    title: INITIAL_TITLE,
    count: 0
  }

  componentDidMount() {
    console.log('cdm')
    this.changeTitle()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('cdu')
    if (prevState.title !== this.state.title) {
      this.changeTitle()
    }
  }

  componentWillUnmount() {
    console.log('cwu')
    this.changeTitle(INITIAL_TITLE)
  }

  changeTitle = (title) => {
    console.log('changeTitle')
    window.document.title = title || this.state.title
  }

  onChangeHandler = (e) => {
    this.setState({ title: e.target.value })
  }

  onCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  render() {
    console.log('render')
    return (
      <div>
        <input type="text" value={this.state.title} onChange={this.onChangeHandler} />
        <button onClick={this.onCount}>{this.state.count}</button>
      </div>
    );
  }
}