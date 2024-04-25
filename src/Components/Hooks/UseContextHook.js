import React from 'react'
import CompA from './CompA'
import CompB from './CompB'

export const context = React.createContext()

const UseContextHook = () => {
    return (
        <center>
            <h2>UseContextHook</h2>
            <context.Provider value="reactJS">
                <CompA />
            </context.Provider>
        </center>
    )
}

export default UseContextHook