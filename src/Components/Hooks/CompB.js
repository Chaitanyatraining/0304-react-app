import React from 'react'
import CompC from './CompC'
import { context } from './UseContextHook'

const CompB = () => {
  return (
    <div>
        <h2>CompB</h2>
        <context.Consumer>
            {(value) => value}
        </context.Consumer>
        <CompC />
    </div>
  )
}

export default CompB