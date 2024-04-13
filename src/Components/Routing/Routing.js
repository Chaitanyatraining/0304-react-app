import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ListsandKeys from '../ListsandKeys'
import Counter from '../Counter'
import Home from '../Home'
import ContactUs from '../ContactUs'

const Routing = () => {
  return (
    <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/listandkeys' element={<ListsandKeys />} />
            <Route path='/counter' element={<Counter />} />
            <Route path='/contactus' element={<ContactUs />} />
    </Routes>
  )
}

export default Routing