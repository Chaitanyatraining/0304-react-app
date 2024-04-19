import React, { useState } from 'react'

const UseStateHook = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([])
    const [products, setproducts] = useState({})
    const [active, setActive] = useState(false)
    // always call the hooks at the top level
    // we should not call hooks inside loops, functions, conditions

    const handleIncrement = () => {
        setCount(count + 1)
    }

    return (
        <center>
            <h2>UseStateHook</h2>
            <h3>Count: {count}</h3>
            <button className='btn btn-primary me-2'
                onClick={handleIncrement}
            >Increment</button>
            <button className='btn btn-primary me-2'
                onClick={() => { setCount(count - 1) }}
            >Increment</button>
            <h5 className='mt-3'>{active ? 'success' : 'fail'}</h5>
            <button className='btn btn-warning'
             onClick={()=>{setActive(!active)}}
            >Status change</button>
            <section></section>
        </center>
    )
}

export default UseStateHook