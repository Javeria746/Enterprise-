import React, { Component } from 'react'

export class message extends Component {
    constructor(){
        super()
        this.state = {
            message: "welcome to learn state"
        }
    }
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
      </div>
    )
  }
}

export default message