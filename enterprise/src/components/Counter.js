import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment(){
       /* this.setState(
            {count : this.state.count + 1})*/
            this.setState((prevState) => ({
                count : prevState.count + 1
            }))
    }
    clear(){
        this.setState({count : 0})
    }
  render() {
    return (
      <div>
          <h1>counter - {this.state.count}</h1>
          <button onClick={() => {this.increment()}}>
              count
          </button>
          <button onMouseOver={() => {this.clear()}}>
              Clear
          </button>
      </div>
    )
  }
}

export default Counter