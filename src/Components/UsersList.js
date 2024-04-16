import React, { Component } from 'react'
import ClassComp from '../ClassComp'

class UsersList extends Component {
    constructor(){
        super()
        console.log('constructor Executed')
    }

    state = {
        users: []
    }

    static getDerivedStateFromProps(){
        console.log('static getDerievedStateFromProps executed')
        return null
    }

    componentDidMount(){
     console.log('componentdidmount') 
     this.getUsersData()  
    }

    getUsersData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
    }

  render() {
    return (
      <div>
        <h2>UsersList</h2>
        <ClassComp />
      </div>
    )
  }
}

export default UsersList