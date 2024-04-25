import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ListsandKeys from '../ListsandKeys'
import Counter from '../Counter'
import Home from '../Home'
import ContactUs from '../ContactUs'
import UsersList from '../UsersList'
import Pagination from '../Pagination'
import UseStateHook from '../Hooks/UseStateHook'
import UseEffectHook from '../Hooks/UseEffectHook'
import UseContextHook from '../Hooks/UseContextHook'
import UseRefHook from '../Hooks/UseRefHook'
import UseReducerHook from '../Hooks/UseReducerHook'

const Routing = () => {
  return (
    <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/listandkeys' element={<ListsandKeys />} />
            <Route path='/counter' element={<Counter />} />
            <Route path='/userslist' element={<UsersList />} />
            <Route path='/pagination' element={<Pagination />} />
            <Route path='/useStatehook' element={<UseStateHook />} />
            <Route path='/useeffecthook' element={<UseEffectHook />} />
            <Route path='/usecontexthook' element={<UseContextHook />} />
            <Route path='/userefhook' element={<UseRefHook />} />
            <Route path='/usereducerhook' element={<UseReducerHook />} />
            <Route path='/contactus' element={<ContactUs />} />
    </Routes>
  )
}

export default Routing