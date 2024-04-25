import React, { useReducer } from 'react'

const UseReducerHook = () => {

     const reducer = (currentState, action) => {
        switch(action.type){
            case 'INCREMENT':
                return currentState + action.payload
            case 'DECREMENT':
                return currentState - action.payload
        }
    }

    const [count, dispatch] = useReducer(reducer, 0)

  return (
    <center>
        <h2>UseReducerHook</h2>
        <h4>Count: {count}</h4>
        <button className='btn btn-primary' 
        onClick={() => {dispatch({type:'INCREMENT', payload:5})}}
        >Increment</button>
        <button className='btn btn-danger'
            onClick={() => {dispatch({type:'DECREMENT', payload:5})}}
        >Decrement</button>
    </center>
  )
}

export default UseReducerHook