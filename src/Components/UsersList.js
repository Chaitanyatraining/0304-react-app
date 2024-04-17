import React, { Component } from 'react'
import ClassComp from '../ClassComp'

class UsersList extends Component {
  constructor() {
    super()
    console.log('constructor Executed')
  }

  state = {
    userList: []
  }

  static getDerivedStateFromProps() {
    console.log('static getDerievedStateFromProps executed')
    return null
  }

  componentDidMount() {
    console.log('componentdidmount')
    this.getUsersData()
  }

  getUsersData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    this.setState({ userList: data })
  }

  render() {
    return (
      <div>
        <h2>UsersList</h2>
        {
          this.state.userList && this.state.userList.length
            > 0 ? (
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>username</th>
                  <th>email</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.userList.map((user, index) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          ) : <p>Loading...</p>
        }
      </div>
    )
  }
}

export default UsersList