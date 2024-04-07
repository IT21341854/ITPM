import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
  from 'react-icons/bs'

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='headerMenu-icon'>
        <BsJustify className='headerIcon' size='2em' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <BsSearch className='headerIcon' size='2em' />
      </div>
      <div className='header-right'>

        <BsPersonCircle className='headerIcon' size='2em' />
      </div>
    </header>
  )
}

export default Header