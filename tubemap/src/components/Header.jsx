import React from 'react'

const Header = () => {
  return (
    <div className='nav-bar'>
      <div className='home-btn'>
        <p className='nav-btn'>home</p>
      </div>
      <div className='nav-right-btns'>
        <p className='nav-btn'>about</p>
        <p className='nav-btn'>contact</p>
      </div>
    </div>
  )
}

export default Header
