import React from 'react'
import './Header.css'

const Header = () => {
  return (
      <div className='header'>
          <div className="header-contents">
              <h1 className='heading'>Order your Fresh Milk Here</h1>
              <p className='para'>Choose from a diverse of milk </p>
              <button className='btn'>View milk</button>
          </div>
    </div>
  )
}

export default Header