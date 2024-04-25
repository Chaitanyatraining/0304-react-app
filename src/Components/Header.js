import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link to='/' class="navbar-brand" href="#">
            <img src="https://www.achieversit.com/assets/images/logo-white.png" />
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <Link to='/listandkeys' class="nav-link" href="#">ListsandKeys</Link>
              </li>
              <li class="nav-item">
                <Link to='/counter' class="nav-link" href="#">Counter</Link>
              </li>
              <li class="nav-item">
                <Link to='/contactus' class="nav-link" href="#">Contact Us</Link>
              </li>
              <li class="nav-item">
                <Link to='/userslist' class="nav-link" href="#">UsersList</Link>
              </li>
              <li class="nav-item">
                <Link to='/pagination' class="nav-link" href="#">Pagination</Link>
              </li>
              <li class="nav-item">
                <Link to='/useStatehook' class="nav-link" href="#">UseStateHook</Link>
              </li>
              <li class="nav-item">
                <Link to='/useeffecthook' class="nav-link" href="#">UseEffectHook</Link>
              </li>
              <li class="nav-item">
                <Link to='/usecontexthook' class="nav-link" href="#">UseContextHook</Link>
              </li>
              <li class="nav-item">
                <Link to='/userefhook' class="nav-link" href="#">UseRefHook</Link>
              </li>
              <li class="nav-item">
                <Link to='/usereducerhook' class="nav-link" href="#">UseReducerHook</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header