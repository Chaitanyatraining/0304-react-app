import React, {useState, useEffect} from 'react'

const UseEffectHook = () => {
    const [users, setUsers] = useState([])
    const [pageNumber, setPagenumber] = useState([])


    useEffect(() => {
        //componentDidMount
        getUsersData()
    }, [pageNumber])

   const getUsersData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsers(data)
      }

  return (
    <center>
        <h2>UseEffectHook</h2>
    </center>
  )
}

export default UseEffectHook