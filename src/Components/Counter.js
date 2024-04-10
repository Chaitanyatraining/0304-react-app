import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        // this.state = {
        //     count:0 
        // }
    }

    // never update the dom directly

    state = {
        count:0
    }

     handleIncrement = () => {
        this.setState({count: this.state.count + 1})
     }

  render() {
    return (
      <center>
        <h2>Counter: {this.state.count}</h2>
        <button className='btn btn-primary me-1' onClick={this.handleIncrement}>Increment</button>
        <button className='btn btn-danger'>Decrement</button>
      </center>
    )
  }
}

export default Counter