import React from 'react'

const Navbar = () => {
    //navItems 
   const navItems = [
    {path: "/",link: "Home"},
    {path: "/services",link: "Services"},
    {path: "/about",link: "About"},
    {path: "/blog",link: "Blog"},
    {path: "/contact",link: "Contact"},
   ] 
  return (
  <header className='bg-black'>
    <nav className='px-4 py-4'>
      <a href='/' className='text-xl font-bold text-white'>Design<span className='text-red-400'>DK</span></a>
    </nav>
  </header>
  )
}

export default Navbar
