import React, { Component } from 'react'

class CounterUnmount extends Component {

    constructor(props){
        super(props)
        this.state = {
            time:0
        }
        this.timerId = null
    }

    componentDidMount(){
        this.timerId = setInterval(() => {
            this.setState((prevState) => ({
                time: prevState.time + 1
            }))
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

  render() {
    return (
      <div>
        <h2>CounterUnmount</h2>
        <h4>Timer: {this.state.time}</h4>
      </div>
    )
  }
}

export default CounterUnmount