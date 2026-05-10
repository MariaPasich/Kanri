import React from 'react'

const Header = () => {
  return (
    <header className='absolute top-0 left-0 w-full bg-white py-4 shadow-sm inline'>
      <img src="/logo_header.png" alt="Kanri logo" className='float-left' />
      <h1 className='font-bold text-gray-800 font-title text-3xl align-middle'>Kanri</h1>
    </header>
  )
}

export default Header
