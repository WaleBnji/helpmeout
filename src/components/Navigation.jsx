// import React from 'react'
import Logo from '../assets/logo.png'

const Navigation = () => {
  return (
    <div className='wrapper fbc'>
      <img src={Logo} alt="" />
      <ul className='fcc space-x-4'>
        <li>
            Features
        </li>
        <li>
            How it works
        </li>
      </ul>
      <h1>Get started</h1>
    </div>
  )
}

export default Navigation
